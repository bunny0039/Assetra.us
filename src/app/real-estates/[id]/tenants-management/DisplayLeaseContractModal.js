import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  useGetLeaseContractByTentantIdQuery,
  useGetLeaseContractsQuery,
} from "@/states/services/assets/leaseContractServices";
import Loader from "@/components/shared/Loader";

export function DisplayLeaseContractModal({
  open,
  setOpen,
  selectedData,
  realEstateId,
}) {
  const { data, isFetching } = useGetLeaseContractByTentantIdQuery({
    realEstateId,
    tenantId: selectedData?.id,
  });

  let getLeaseContract =
    data && data?.data?.find((item) => item?.summary !== null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        maxWidth={true}
        fullWidth={"lg"}
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex justify-between items-center">
            <p className="text-md md:text-xl font-semibold">Lease Contract</p>
            <p
              className="text-xs cursor-pointer hover:text-black"
              onClick={handleClose}
            >
              Close
            </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <div className="mb-4">
                <h6 className="text-gray-600 text-sm font-semibold mb-1">
                  Tenant Details:
                </h6>
                <div className="flex gap-12 items-center">
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Name</p>
                    <p className="text-sm text-black font-medium">
                      {selectedData?.name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-xs text-gray-600 font-medium">Email</p>
                    <p className="text-sm text-black font-medium">
                      {selectedData?.email}
                    </p>
                  </div>
                </div>
              </div>

              {isFetching ? (
                <Loader title="Fetching lease contract..." />
              ) : (
                <div>
                  <h6 className="text-gray-600 text-sm font-semibold mb-2">
                    Contract Descriptions:
                  </h6>
                  {getLeaseContract ? (
                    <p className="text-sm tracking-wider">
                      {getLeaseContract?.summary}
                    </p>
                  ) : (
                    <p>No lease contract found</p>
                  )}
                </div>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
