import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ totalMassInt, upcomingMassesThisWeek, sundayMasses, massIntentionsThisWeek }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-textColor  leading-tight">Dashboard</h2>}
        >

            <Head title="Dashboard" />

            <h2 className="text-4xl mt-4 font-bold text-white leading-tight text-center">
                MASS INTENTION STATISTICS
            </h2>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
                    {/* total mass intentions */}
                    <div className="bg-bgDarker p-6 text-center shadow-sm sm:rounded-lg">
                        <h3 className="text-statsColor1 text-lg font-semibold">TOTAL MASS INTENTIONS</h3>
                        <p className="text-statsColor1 text-4xl font-bold mt-2">{totalMassInt}</p>
                    </div>

                    {/* upcoming masses dis week */}
                    <div className="bg-bgDarker p-6 text-center shadow-sm sm:rounded-lg">
                        <h3 className="text-statsColor2 text-lg font-semibold">UPCOMING MASSES THIS WEEK</h3>
                        <p className="text-statsColor2 text-4xl font-bold mt-2">{upcomingMassesThisWeek}</p>
                    </div>

                    {/* masses scheduled on sunday */}
                    <div className="bg-bgDarker p-6 text-center shadow-sm sm:rounded-lg">
                        <h3 className="text-statsColor3 text-lg font-semibold">MASSES SCHEDULED ON SUNDAY</h3>
                        <p className="text-statsColor3 text-4xl font-bold mt-2">{sundayMasses}</p>
                    </div>
                </div>
            </div>

            {/*upcoming mass intentions able */}
            <h2 className="text-4xl mt-4 font-bold text-white leading-tight text-center">
                MASS INTENTION OVERVIEW
            </h2>
            <div className="py-12">
                <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-bgMedium overflow-hidden shadow-sm rounded-lg p-4">
                        <div className="p-4 mb-1 bg-bgLight text-textColor font-bold text-lg">
                            Upcoming mass intentions (This week)
                        </div>
                        <div className="overflow-auto">
                            <table className="w-full text-sm text-left text-textColor">
                                <thead className="text-xs uppercase bg-bgLight text-textColor border-b-2 border-bgMedium">
                                    <tr>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Time</th>
                                        <th className="px-4 py-3">Mass Type</th>
                                        <th className="px-4 py-3">Offerer</th>
                                        <th className="px-4 py-3">Offered For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {massIntentionsThisWeek.length > 0 ? (
                                        massIntentionsThisWeek.map((item) => (
                                            <tr key={item.IntentionID} className="border-b bg-bgMedium dark:border-bgColor">
                                                <td className="px-4 py-3">{new Date(item.DateOfMass).toLocaleDateString()}</td>
                                                <td className="px-4 py-3">{item.TimeOfMass} MASS</td>
                                                <td className="px-4 py-3">{item.IntentionType.toUpperCase()}</td>
                                                <td className="px-4 py-3">{item.Offerer}</td>
                                                <td className="px-4 py-3">{item.OfferedFor}</td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr>
                                                <td colSpan="5" className="px-4 py-3 text-center text-textColor">
                                                    No upcoming intentions for this week.
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                        {/* view all appointments button */}
                        <Link
                            href={route('view.index')} // Adjust this to the correct route name for your appointments view page
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5c5.21 0 9.97 3.48 11 8.5-1.03 5.02-5.79 8.5-11 8.5S2.03 18.02 1 13C2.03 7.98 6.79 4.5 12 4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                            </svg>
                            View All Appointments
                        </Link>

                        {/* add new appointment button */}
                        <Link
                            href={route('manage.create')}
                            className="bg-buttonGreen hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add New Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

