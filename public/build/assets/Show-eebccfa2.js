import{_ as c}from"./AppLayout-c44098ce.js";import p from"./DeleteUserForm-a1cb419e.js";import l from"./LogoutOtherBrowserSessionsForm-b192fde5.js";import{S as s}from"./SectionBorder-3a3e903f.js";import f from"./TwoFactorAuthenticationForm-48795010.js";import u from"./UpdatePasswordForm-3fb587f1.js";import _ from"./UpdateProfileInformationForm-7b52b65e.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-57e4c8dc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-25fef11c.js";import"./SectionTitle-d0669298.js";import"./DangerButton-7abe87ea.js";import"./TextInput-2187d038.js";import"./SecondaryButton-e7518335.js";import"./ActionMessage-19f8359e.js";import"./PrimaryButton-5edf9b86.js";import"./InputLabel-16fcd5ad.js";import"./FormSection-ef9c7dcb.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};