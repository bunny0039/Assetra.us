export const routes = {
  SIGN_UP: "/auth/signup",
  SIGN_IN: "/auth/signin",
  HOME: "/",

  SUBSCRIPTION: "/subscription",
  ADD_NEW_SUBSCRIPTION: "/subscription/add-new-plan",
  SEND_INVITATION_LINK: "/send-invitations-link",
  EMPLOYEE_INVITATION_ACCEPT: "/employee-invitation-accept",

  FAMILY_OFFICE_ADD_COMPANY_DETAILS: "/office-admin/add-company-details",
  FAMILY_OFFICE_ADD_OWNER_DETAILS: "/office-admin/add-owner-details",

  DASHBOARD_FAMILY_OFFICE_USERS: "/office-admin/dashboard/family-office/users",

  DASHBOARD_FAMILY_OFFICE_ROLE_MANAGEMENT:
    "/office-admin/dashboard/family-office/role-management",
  DASHBOARD_FAMILY_OFFICE_ROLE_MANAGEMENT_PERMISSION_ROLE:
    "/office-admin/dashboard/family-office/role-management/permissions/role",
  DASHBOARD_FAMILY_OFFICE_ROLE_MANAGEMENT_PERMISSION_ADVANCE:
    "/office-admin/dashboard/family-office/role-management/permissions/advance",

  DASHBOARD_COMPANY: "/office-admin/dashboard/company",
  DASHBOARD_OWNERS: "/office-admin/dashboard/owners",

  // --------------------- Tenants Reoutes ----------------------
  TENANT_LEASE_CONTRACT: "/tenant/lease-contract",
  TENANT_PAYMENT: "/tenant/payment",
  TENANT_MAINTENANCE_REQUESTS: "/tenant/maintenance-requests",
};
