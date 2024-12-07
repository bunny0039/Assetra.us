import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import { authServices } from "../services/authServices";
import { plansServices } from "../services/plansServices";
import { profileServices } from "../services/profileServices";
import { usersServices } from "../services/usersServices";
import { companyServices } from "../services/companyServices";
import { realEstateServices } from "../services/assets/realEstateServices";
import { bankServices } from "../services/assets/bankServices";
import companyReducer from "../reducers/companyReducer";
import { rootCompanyServices } from "../services/office-admin/rootCompanyServices";
import { permissionServices } from "../services/office-admin/permissionServices";
import { driveServices } from "../services/assets/driveServices";
import { invitationsServices } from "../services/office-admin/invitationsServices";
import { publicInvitationsServices } from "../services/publicInvitationsServices";
import { transactionServices } from "../services/transaction/transactionServices";
import { leaseContractServices } from "../services/assets/leaseContractServices";
import { maintenanceServices } from "../services/assets/maintenanceServices";
import permissionReducer from "../reducers/permissionReducer";

const Store = configureStore({
  reducer: {
    authReducer: authReducer,
    companyReducer: companyReducer,
    permissionReducer: permissionReducer,
    [authServices.reducerPath]: authServices.reducer,
    [plansServices.reducerPath]: plansServices.reducer,
    [profileServices.reducerPath]: profileServices.reducer,
    [usersServices.reducerPath]: usersServices.reducer,
    [companyServices.reducerPath]: companyServices.reducer,
    [realEstateServices.reducerPath]: realEstateServices.reducer,
    [bankServices.reducerPath]: bankServices.reducer,
    [rootCompanyServices.reducerPath]: rootCompanyServices.reducer,
    [permissionServices.reducerPath]: permissionServices.reducer,
    [driveServices.reducerPath]: driveServices.reducer,
    [invitationsServices.reducerPath]: invitationsServices.reducer,
    [publicInvitationsServices.reducerPath]: publicInvitationsServices.reducer,
    [transactionServices.reducerPath]: transactionServices.reducer,
    [leaseContractServices.reducerPath]: leaseContractServices.reducer,
    [maintenanceServices.reducerPath]: maintenanceServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authServices.middleware,
      plansServices.middleware,
      profileServices.middleware,
      usersServices.middleware,
      companyServices.middleware,
      realEstateServices.middleware,
      bankServices.middleware,
      rootCompanyServices.middleware,
      permissionServices.middleware,
      driveServices.middleware,
      invitationsServices.middleware,
      publicInvitationsServices.middleware,
      transactionServices.middleware,
      leaseContractServices.middleware,
      maintenanceServices.middleware,
    ]),
});

export default Store;
