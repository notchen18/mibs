import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route('user.store'));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-textColor leading-tight">
            Create New User
          </h2>
        </div>
      }
    >
      <Head title="Users" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-bgMedium overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-bgMedium shadow sm:rounded-lg"
            >
              {/* Name */}
              <div>
                <InputLabel htmlFor="name" value="Name" style={{ color: "#361f08" }} />
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('name', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>

              {/* Email */}
              <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" style={{ color: "#361f08" }} />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('email', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>

              {/* Password */}
              <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" style={{ color: "#361f08" }} />
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('password', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" style={{ color: "#361f08" }} />
                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  style={{ backgroundColor: "#361f08", color: "white" }}
                />
                <InputError message={errors.password_confirmation} className="mt-2" />
              </div>

              {/* Buttons: Submit and Cancel (Side by Side) */}
              <div className="mt-6 flex justify-end space-x-4">
                <Link
                  href={route("user.index")}
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
