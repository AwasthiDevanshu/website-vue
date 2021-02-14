<template>
  <CHeader fixed with-subheader light>
  <CNavbar expandable="md" light>
    <CToggler in-navbar @click="collapsed = !collapsed"/>
    <CNavbarBrand href="#">
        <CIcon 
        class="c-sidebar-brand-full" 
        :src=logo
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      >
        </CIcon>
    </CNavbarBrand>
    <CCollapse :show="collapsed" navbar>
      
    <CRenderFunction flat :content-to-render="$options.nav"/>
      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
          
        <CForm inline>
          <CInput
            class="mr-sm-2"
            placeholder="Search"
            size="sm"
          />
          <CButton
            color="secondary"
            size="sm" 
            class="my-2 my-sm-0" 
            type="submit"
          >
            Search
          </CButton>
        </CForm>

        <CDropdown
          togglerText="Lang"
          nav
          placement="bottom-end"
        >
            <CDropdownItem>EN</CDropdownItem>
            <CDropdownItem>ES</CDropdownItem>
            <CDropdownItem>RU</CDropdownItem>
            <CDropdownItem>FA</CDropdownItem>
        </CDropdown>

        <CDropdown
          nav
          togglerText="User"
          placement="bottom-end"
        >
          <CDropdownItem>Profile</CDropdownItem>
          <CDropdownItem>Signout</CDropdownItem>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CNavbar>
</CHeader>
</template>


<script>
import nav from './_navbar'
import config from "../constants/config";

export default {
    name: 'TheNavbar',
      nav,
      components: {
        config
      },
  
  data () {
    return {
      collapsed: false,
      logo:config.logo
    }
  }
}
</script>
