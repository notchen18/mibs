import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { MANAGE_STATUS_CLASS_MAP, MANAGE_STATUS_TEXT_MAP } from "../constants.jsx";

export default function Index({ intentions }) {
    return (
        <Authenticated
            header={<h2 className="font-semibold text-xl text-textColor leading-tight">View Mass Intentions</h2>}
        >
            <Head title="View Intentions" />
            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-bgMedium overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-textColor dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-bgLight text-textColor border-b-2 border-bgMedium">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">Intention</th>
                                            <th className="px-3 py-3">Date</th>
                                            <th className="px-3 py-3">Time</th>
                                            <th className="px-3 py-3">Offerer</th>
                                            <th className="px-3 py-3">Gimisahan</th>
                                            <th className="px-3 py-3">Contact No.</th>
                                            <th className="px-3 py-3">Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {intentions.length > 0 ? (
                                            intentions.map((item) => (
                                                <tr className="text-textColor bg-bgMedium border-b dark:border-bgColor" key={item.IntentionID}>
                                                    <td className="px-3 py-2">{item.IntentionType}</td>
                                                    <td className="px-3 py-2">{item.DateOfMass}</td>
                                                    <td className="px-3 py-2">{item.TimeOfMass}</td>
                                                    <td className="px-3 py-2">{item.Offerer}</td>
                                                    <td className="px-3 py-2">{item.OfferedFor}</td>
                                                    <td className="px-3 py-2">{item.ContactNo}</td>
                                                    <td className="px-3 py-2">
                                                        <span className={`px-2 py-1 rounded text-white ${MANAGE_STATUS_CLASS_MAP[item.status] || 'bg-gray-500'}`}>
                                                            {MANAGE_STATUS_TEXT_MAP[item.status] || 'Unknown'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center px-3 py-2 text-gray-500">
                                                    No intentions available.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
