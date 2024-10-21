import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import TextInput from "@/Components/TextInput";
import { ChevronUpIcon, ChevronDownIcon, PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/16/solid';

export default function Index({ user, queryParams = null, success }) {
    queryParams = queryParams || {};

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    useEffect(() => {
        if (success) {
            setNotificationMessage(success);
            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }
    }, [success]);

    const searchFieldChanged = (field, value) => {
        if (value) {
            queryParams[field] = value;
        } else {
            delete queryParams[field];
        }

        router.get(route('user.index'), queryParams, { replace: true, preserveState: true });
    };

    const confirmDelete = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        if (itemToDelete) {
            router.delete(route('user.destroy', itemToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setNotificationMessage('User was Deleted');
                    setShowNotification(true);

                    setTimeout(() => {
                        setShowNotification(false);
                    }, 2000);
                }
            });
        }
    };

    const sortChanged = (field) => {
        if (field === queryParams.sort_field) {
            queryParams.sort_direction = queryParams.sort_direction === 'asc' ? 'desc' : 'asc';
        } else {
            queryParams.sort_field = field;
            queryParams.sort_direction = 'asc';
        }

        router.get(route('user.index'), queryParams);
    };

    return (
        <Authenticated
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-textColor leading-tight">
                        Users
                    </h2>
                    <Link href={route("user.create")} className="bg-buttonGreen py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white mr-2">
                            <PlusIcon className="w-5 h-5 text-white" />
                        </div>
                        Add New User
                    </Link>
                </div>
            }
        >
            <Head title="Users" />

            {showNotification && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-green-300 text-white px-4 py-2 rounded shadow-lg">
                        {notificationMessage}
                    </div>
                </div>
            )}

            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-bgMedium overflow-hidden shadow-sm sm:rounded-lg max-w-6xl mx-auto">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-textColor dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-bgLight text-textColor border-b-2 border-bgMedium">
                                        <tr className="text-nowrap">
                                            <th onClick={e => sortChanged('id')}>
                                                <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                    ID
                                                    <div>
                                                        <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'id' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`} />
                                                        <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'id' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('name')}>
                                                <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                    Name
                                                    <div>
                                                        <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'name' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`} />
                                                        <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'name' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('email')}>
                                                <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                    Email
                                                    <div>
                                                        <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'email' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`} />
                                                        <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'email' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={e => sortChanged('created_at')}>
                                                <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                                                    Created At
                                                    <div>
                                                        <ChevronUpIcon className={`w-4 ${queryParams.sort_field === 'created_at' && queryParams.sort_direction === 'asc' ? 'text-white' : ''}`} />
                                                        <ChevronDownIcon className={`w-4 -mt-2 ${queryParams.sort_field === 'created_at' && queryParams.sort_direction === 'desc' ? 'text-white' : ''}`} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="px-3 py-3 text-right">Action</th>
                                        </tr>
                                    </thead>

                                    <thead className="text-xs text-textColor uppercase bg-bgLight border-b-2 border-bgMedium">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.name}
                                                    placeholder="Name"
                                                    onChange={e => searchFieldChanged('name', e.target.value)}
                                                />
                                            </th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.email}
                                                    placeholder="Email"
                                                    onChange={e => searchFieldChanged('email', e.target.value)}
                                                />
                                            </th>
                                            <th className="px-3 py-3 text-right"></th>
                                            <th className="px-3 py-3 text-right"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {user.data.map((item) => (
                                            <tr className="text-textColor bg-bgMedium border-b dark:border-bgColor" key={item.id}>
                                                <td className="px-3 py-2">{item.id}</td>
                                                <td className="px-3 py-2">{item.name}</td>
                                                <td className="px-3 py-2">{item.email}</td>
                                                <td className="px-3 py-2">{item.created_at}</td>
                                                <td className="px-3 py-2 text-right">
                                                    <div className="flex justify-end space-x-1">
                                                        <Link href={route('user.edit', item.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                            <PencilIcon className="h-5 w-5" />
                                                        </Link>
                                                        <button onClick={() => confirmDelete(item)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                            <TrashIcon className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <Pagination Links={user.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this user?</h3>
                        <div className="flex justify-end space-x-4">
                            <button onClick={() => setShowDeleteModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Authenticated>
    );
}
