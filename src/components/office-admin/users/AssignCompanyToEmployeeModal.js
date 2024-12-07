import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loader from "@/components/shared/Loader";
import {
  useAssignCompanyToEmployeeMutation,
  useGetAllCompaniesQuery,
} from "@/states/services/companyServices";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function AssignCompanyToEmployeeModal({ open, setOpen, selectedData }) {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const { data, isFetching } = useGetAllCompaniesQuery();

  const [assignCompanyAPI, { isLoading }] =
    useAssignCompanyToEmployeeMutation();

  const handleAssignCompany = () => {
    console.log("=>>f>", selectedData?.id, selectedCompanies);
    assignCompanyAPI({
      employeeId: selectedData?.id,
      companies: selectedCompanies,
    })
      .unwrap()
      .then((payload) => {
        setOpen(false);
        toast({
          title: "Success/Assign Employee",
          description: "Companies has been assigned to employee",
        });
        console.log("payload", payload);
      })
      .catch((error) => {
        console.log("=>", error);
        toast({
          title: "Success/Assign Employee",
          description: error?.data?.message
            ? error?.data?.message
            : "Something went wrong, company not assigned",
        });
      });
  };

  const handleSelectCompany = (id) => {
    if (selectedCompanies?.includes(id)) {
      setSelectedCompanies((prev) =>
        prev.filter((companyId) => companyId !== id)
      );
    } else {
      setSelectedCompanies((prev) => [...prev, id]);
    }
  };

  const handleSelectAll = () => {
    const allCompanyIds = data?.data?.map((company) => company?.id);
    setSelectedCompanies(allCompanyIds);
  };

  const handleDeselectAll = () => {
    setSelectedCompanies([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClickOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isLoading && (
          <div className="bg-[rgba(0,0,0,.05)] h-full w-full absolute z-50" />
        )}
        <Toaster />
        <DialogTitle
          id="alert-dialog-title"
          className="flex justify-between items-center"
        >
          <div className="flex justify-between items-center">
            <p className="text-md font-semibold">
              Assign Companies to Employee
            </p>
          </div>
          {/* ================== */}
          <div className="flex items-center gap-3">
            {!isLoading && (
              <Button
                className="bg-secondary w-40 h-9 gap-2 text-xs md:text-sm text-white hover:bg-gray-500"
                onClick={handleClose}
              >
                Cancel
              </Button>
            )}
            {isLoading ? (
              <Button
                className="bg-white shadow-md w-40 h-9 gap-2 text-xs md:text-sm text-white"
                disabled
              >
                <Loader title="Saving..." />
              </Button>
            ) : (
              <Button
                className="bg-primary w-40 h-9 gap-2 text-xs md:text-sm text-white"
                onClick={handleAssignCompany}
                disabled={isLoading}
              >
                Save
              </Button>
            )}
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex justify-center items-center">
                  <p className="text-sm text-black font-semibold">
                    {selectedData?.name[0]}
                  </p>
                </div>
                <div className="">
                  <p className="text-sm text-black font-semibold">
                    {selectedData?.name}
                  </p>
                  <p className="text-sm text-black font-medium">
                    {selectedData?.email}
                  </p>
                </div>
              </div>
              <div className="my-6">
                <div className="flex items-center justify-between">
                  <h6 className="text-gray-600 text-md font-semibold mb-1">
                    Companies List
                  </h6>
                  <div className="flex gap-3 items-center">
                    <h6
                      className="text-gray-500 text-sm font-semibold cursor-pointer hover:underline"
                      onClick={handleSelectAll}
                    >
                      Select All
                    </h6>
                    <h6
                      className="text-red-500 text-sm font-semibold cursor-pointer hover:underline"
                      onClick={handleDeselectAll}
                    >
                      Remove All
                    </h6>
                  </div>
                </div>
                <div className="mt-1.5">
                  {isFetching ? (
                    <div>
                      <Loader title="Companies fetching..." />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {data?.data?.map((item) => {
                        return (
                          <div
                            className={`relative border rounded-md hover:border-gray-800 hover:bg-gray-100 cursor-pointer ${
                              selectedCompanies?.includes(item?.id)
                                ? "border-gray-800 bg-gray-100"
                                : "bg-white"
                            } p-3 space-y-2 shadow-md`}
                            onClick={() => handleSelectCompany(item?.id)}
                          >
                            {selectedCompanies?.includes(item?.id) && (
                              <Check
                                size={20}
                                className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-black"
                              />
                            )}
                            <div>
                              <p className="text-xs text-gray-600 font-medium">
                                Name
                              </p>
                              <p className="text-xs text-black font-semibold">
                                {item?.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 font-medium">
                                Email
                              </p>
                              <p className="text-xs text-black font-semibold">
                                {item?.email}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 font-medium">
                                Address
                              </p>
                              <p className="text-xs text-black font-semibold">
                                {item?.address}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
