export const proctoring = {
    data() {
        return {
            recorder: '',
            recordedChunks: [],
            videoTag: '',
            fields: [],
            videoTime: '',
            videoInterval: '',
            imgInterval: '',
            examData: this.get('examData', 'local'),
            examSettings: {},
            isRecording: false,
            isCapturing: false
        }
    },
    mounted() {
        if(!this.examData.eventDetails){
            return ;
        }
        this.examSettings = this.examData.eventDetails.advanceSetting;
        this.videoTag = document.getElementById('inputStream')
        let Off = "0";
        if (this.videoTag) {
            if (this.examSettings.vidProctor !== Off) {
                this.isRecording = true;
                this.startRecording()
            }
            if (this.examSettings.imgProctor !== Off) {
                this.isCapturing = true;
                this.imageCapture();
            }
        }
    },
    methods: {
        startRecording() {
            this.recordedChunks = [];
            this.recorder = new MediaRecorder(this.videoTag.srcObject, { mimeType: "video/webm" })
            this.recorder.ondataavailable = event => this.recordedChunks.push(event.data)
            this.recorder.start(1000);
            this.videoTime = setTimeout(() => {
                if (this.recorder.state === 'recording') {
                    this.recorder.stop();
                    this.sendVideo();
                }
            }, 11000)
        },
        imageCapture() {
            this.takeSnapShot().then((imageBlob) => {
                this.fields['uploadFile'] = imageBlob;
                this.sendImage();
            })
        },
        takeSnapShot() {
            //capture image using canvas object
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let width = 320;
            let height = 200;
            ctx.drawImage(this.videoTag, 0, 0, width, height)
            return new Promise((res) => {
                canvas.toBlob(res, 'image/jpeg'); // request a Blob from the canvas
            });
        },
        sendImage() {
            let params = {};
            params.data = {};
            params.token = this.examData.authToken;
            let url = 'test/proctoring/uploadProctoringImage';
            this.ajaxCall(url, params, this.imageUploaded, this.fields);
        },
        imageUploaded(apiResponse) {
            if (apiResponse.error !== true) {
                //delay of 1 minute
                this.imgInterval = setTimeout(() => {
                    this.imageCapture();
                }, 60000)
            }
        },
        sendVideo() {
            let recordedBlob = new Blob(this.recordedChunks, { type: "video/webm" });
            this.fields['uploadFile'] = recordedBlob;
            let params = {}
            params.data = {};
            params.token = this.examData.authToken;
            let url = 'test/proctoring/uploadProctoringVideo';
            this.ajaxCall(url, params, this.videoUploaded, this.fields);
        },
        videoUploaded(apiResponse) {
            if (apiResponse.error !== true) {
                //delay of 1 minute
                this.videoInterval = setTimeout(() => {
                    this.startRecording();
                }, 60000)
            }
        },
        stopInputStream() {
            if (this.videoTag) {
                if (this.recorder.state === 'recording') this.recorder.stop();
                if (this.isRecording) {
                    clearTimeout(this.videoTime);
                    clearTimeout(this.videoInterval);
                }
                if (this.isCapturing) clearTimeout(this.imgInterval);
                this.videoTag.srcObject.getTracks().forEach(track => {
                    if (track.readyState === 'live' && track.kind === 'video') {
                        track.stop();
                    }
                });
                this.videoTag.remove();
            }
        },
    }
}