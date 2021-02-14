export const localDb = {
    methods: {
        save: async function (key, data, type) {
            let store = (type === 'session') ?  sessionStorage:  localStorage
            const parsed = JSON.stringify(data);
            store.setItem(key, parsed);
        },
        get: function (key, type) {
            let store = (type === 'session') ?  sessionStorage:  localStorage
            if (store.getItem(key)) {
                try {
                    return JSON.parse(store.getItem(key));
                } catch (e) {
                    store.removeItem(key);
                }

            }
        },
        getToken: function(){
            return this.get("testToken","local");
        },
        remove: async function (key, type) {
            let store = (type === 'session') ?  sessionStorage:  localStorage
            store.removeItem(key)
        },
        formatTime: function (val) {
            if (val < 10) {
                return "0" + val
            }
            return val
        },
    }
}