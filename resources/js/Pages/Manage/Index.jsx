import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { MANAGE_STATUS_CLASS_MAP, MANAGE_STATUS_TEXT_MAP } from "../constants.jsx";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput.jsx";
import { ChevronUpIcon, ChevronDownIcon, PencilIcon, TrashIcon, PlusIcon} from '@heroicons/react/16/solid';

export default function Index({ manage, queryParams = null, success }) {
    queryParams = queryParams || {}

    const searchFieldChanged = (field, value) => {
        if (value) {
            queryParams[field] = value;
        } else {
            delete queryParams[field];
        }
        
        router.get(route('manage.index'), queryParams, { replace: true, preserveState: true });
    };

    const deleteManage = (item) => {
        if (!window.confirm(`Are you sure you want to delete the Intention? ${item.IntentionID}`)) {
            return;
        }
        router.delete(route('manage.destroy', item.IntentionID))
    }    

    const sortChanged = (field) => {
        if (field === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = field;
            queryParams.sort_direction = 'asc';
        }

        router.get(route('manage.index'), queryParams);
    };

    return (
        <Authenticated
            header={
                <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-textColor  leading-tight">
                Manage Intentions
                </h2>
                <Link href= {route("manage.create")}className="bg-buttonGreen py-1 px-3 text-white rounded shadow transition-all hover:big-emerald-600 flex items-center">
               
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white mr-2">
                    <PlusIcon className="w-5 h-5 text-white" /> {/* Change text color to emerald for the icon */}
                </div>
                    
                Add New Intention
                </Link>
                </div>
        }
        >
            <Head title="Manage Intentions" />
            {success && (
            <div className="bg-notif py-2 px-4 text-white rounded mt-4 mb-4">
                {success}
            </div>
              )}
            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">

                    <div className="bg-bgMedium  overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className="overflow-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-textColor dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-bgLight text-textColor border-b-2 border-bgMedium">
                                    <tr className="text-nowrap">
                                        <th onClick={e => sortChanged('IntentionID')}>
                                            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                Id
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'IntentionID' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'IntentionID' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('IntentionType')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Intention
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'IntentionType' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'IntentionType' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('DateOfMass')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Date
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'DateOfMass' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'DateOfMass' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('TimeOfMass')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Time
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'TimeOfMass' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'TimeOfMass' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('Offerer')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Nagpamisa
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'Offerer' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'Offerer' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('OfferedFor')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Gimisahan
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'OfferedFor' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'OfferedFor' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('ContactNo')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Contact No.
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'ContactNo' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'ContactNo' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th onClick={e => sortChanged('status')}>
                                            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                Status
                                                <div>
                                                    <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'status' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`}/>
                                                    <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'status' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`}/>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="px-3 py-3 text-right">Action</th>
                                    </tr>
                                </thead> 

                                <thead className="text-xs text-textColor uppercase bg-bgLight border-b-2 border-bgMedium">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.Offerer} 
                                                placeholder="Pangalan sa Nagpamisa" 
                                                onChange={e => searchFieldChanged('Offerer', e.target.value)} 
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.OfferedFor}
                                                placeholder="Pangalan sa Gimisahan"
                                                onChange={e => searchFieldChanged('OfferedFor', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.ContactNo}
                                                placeholder="Contact No."
                                                onChange={e => searchFieldChanged('ContactNo', e.target.value)}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput
                                                className="w-full"
                                                defaultValue={queryParams.status}
                                                onChange={e => searchFieldChanged('status', e.target.value)}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="pending">Pending</option>
                                                <option value="completed">Completed</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3 text-right"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {manage.data.map((item) => (
                                        <tr className=" text-textColor bg-bgMedium border-b dark:border-bgColor" key={item.IntentionID}>
                                            <td className="px-3 py-2">{item.IntentionID}</td>
                                            <td className="px-3 py-2">{item.IntentionType}</td>
                                            <td className="px-3 py-2">{item.DateOfMass}</td>
                                            <td className="px-3 py-2">{item.TimeOfMass}</td>
                                            <td className="px-3 py-2">{item.Offerer}</td>
                                            <td className="px-3 py-2">{item.OfferedFor}</td>
                                            <td className="px-3 py-2">{item.ContactNo}</td>
                                            <td className="px-3 py-2">
                                                <span className={`px-2 py-1 rounded text-white ${MANAGE_STATUS_CLASS_MAP[item.status] || 'bg-gray-500'}`}>
                                                    {MANAGE_STATUS_TEXT_MAP[item.status]}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2 text-right">
                                                <div className="flex justify-end space-x-1">
                                                    <Link href={route('manage.edit', item.IntentionID)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                        <PencilIcon className="h-5 w-5" />
                                                    </Link>
                                                    <button onClick={e => deleteManage(item)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                        <TrashIcon className="h-5 w-5" /> 
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                            <Pagination Links={manage.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
