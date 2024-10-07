import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    IntentionType: '',
    DateOfMass: '',
    TimeOfMass: '',
    Offerer: '',
    OfferedFor: '',
    ContactNo: '',
    status: ''
  });


  const onSubmit = (e) => {
    e.preventDefault();
    post(route('manage.store'));
  };



  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-textColor leading-tight">
            Create New Mass Intention
          </h2>
        </div>
      }
    >
      <Head title="Mass Intentions" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-bgMedium overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-bgMedium shadow sm:rounded-lg"
            >
              {/* Intention Type */}
              <div>
                <InputLabel htmlFor="IntentionType" value="Intention Type" style={{ color: "#361f08" }} />
                <SelectInput
                  id="IntentionType"
                  name="IntentionType"
                  className="mt-1 block w-full"
                  onChange={(e) => setData('IntentionType', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                >
                  <option value="" style={{ color: "#ffffff" }}>Select Intention Type</option>
                  <option value="Thanksgiving" className="bg-bgColor text-white">Thanksgiving</option>
                  <option value="Repose of the Soul" className="bg-bgColor text-white">Repose of the Soul</option>
                </SelectInput>
                <InputError message={errors.IntentionType} className="mt-2" />
              </div>

              {/* Date of Mass */}
              <div className="mt-4">
                <InputLabel htmlFor="DateOfMass" value="Date of Mass" style={{ color: "#361f08" }} />
                <TextInput
                  id="DateOfMass"
                  type="date"
                  name="DateOfMass"
                  value={data.DateOfMass}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('DateOfMass', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.DateOfMass} className="mt-2" />
              </div>

              {/* Time of Mass */}
              <div className="mt-4">
                <InputLabel htmlFor="TimeOfMass" value="Time of Mass" style={{ color: "#361f08" }} />
                <SelectInput
                  id="TimeOfMass"
                  name="TimeOfMass"
                  className="mt-1 block w-full"
                  onChange={(e) => setData('TimeOfMass', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                >
                  <option value="">Select Time of Mass</option>
                  <option value="1st">1st Mass |5:00 am - 6:00 am|</option>
                  <option value="2nd">2nd Mass |6:30 am - 7:30 am|</option>
                  <option value="3rd">3rd Mass |8:00 am - 9:00 am|</option>
                  <option value="4th">4th Mass |9:30 am - 10:30 am|</option>
                  <option value="5th">5th Mass |2:00 pm - 3:00 pm|</option>
                  <option value="6th">6th Mass |3:30 pm - 4:30 pm|</option>
                  <option value="7th">7th Mass |5:00 pm - 6:00 pm|</option>
                </SelectInput>
                <InputError message={errors.TimeOfMass} className="mt-2" />
              </div>

              {/* Offerer */}
              <div className="mt-4">
                <InputLabel htmlFor="Offerer" value="Offeror" style={{ color: "#361f08" }} />
                <TextInput
                  id="Offerer"
                  type="text"
                  name="Offerer"
                  value={data.Offerer}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('Offerer', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.Offerer} className="mt-2" />
              </div>

              {/* Offered For */}
              <div className="mt-4">
                <InputLabel htmlFor="OfferedFor" value="Offered For" style={{ color: "#361f08" }} />
                <TextInput
                  id="OfferedFor"
                  type="text"
                  name="OfferedFor"
                  value={data.OfferedFor}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('OfferedFor', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.OfferedFor} className="mt-2" />
              </div>

              {/* Contact Number */}
              <div className="mt-4">
                <InputLabel htmlFor="ContactNo" value="Contact Number" style={{ color: "#361f08" }} />
                <TextInput
                  id="ContactNo"
                  type="text"
                  name="ContactNo"
                  value={data.ContactNo}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('ContactNo', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.ContactNo} className="mt-2" />
              </div>

              {/* Status */}
              <div className="mt-4">
                <InputLabel htmlFor="status" value="Status" style={{ color: "#361f08" }} />
                <SelectInput
                  id="status"
                  name="status"
                  className="mt-1 block w-full"
                  onChange={(e) => setData('status', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>

              {/* Buttons: Submit and Cancel (Side by Side) */}
              <div className="mt-6 flex justify-end space-x-4">
                <Link
                  href={route("manage.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button className="bg-buttonGreen py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
