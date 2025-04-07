import React, { useState } from 'react';
import { X, Menu, ChevronRight, Gift, DollarSign } from 'lucide-react';

const LambdaChiFundraiser = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [donationAmount, setDonationAmount] = useState(0);
    const [selectedRaffles, setSelectedRaffles] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    // Lambda Chi Alpha colors 
    const colors = {
        primary: '#4B2E83', // Purple
        secondary: '#85754D', // Gold
        accent: '#C4C5C7', // Silver/Gray
    };

    const raffleItems = [
        { id: 1, name: 'Locally Brewed Beverage Pack (3x6)', price: 5, image: '/api/placeholder/300/200', tickets: 0 },
        { id: 2, name: 'Vintage WFU Merchandise Box (Vintage Flag, Hat, Shirt)', price: 10, image: '/api/placeholder/300/200', tickets: 0 },
        { id: 3, name: 'Grand Prize Basket', price: 20, image: '/api/placeholder/300/200', tickets: 0 },
        { id: 4, name: 'PGA Tour Golf Collection (Pinehurst No. 2)', price: 15, image: '/api/placeholder/300/200', tickets: 0 },
        { id: 5, name: 'Home Decor Pack (2 Signs)', price: 5, image: '/api/placeholder/300/200', tickets: 0 },
    ];

    const donationOptions = [10, 20, 30, 40, 50, 100];

    const toggleRaffleSelection = (id) => {
        if (selectedRaffles.includes(id)) {
            setSelectedRaffles(selectedRaffles.filter(itemId => itemId !== id));
        } else {
            setSelectedRaffles([...selectedRaffles, id]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (donationAmount > 0 && selectedRaffles.length > 0) {
            setSubmitted(true);
        }
    };

    // Calculate tickets based on donation amount
    const ticketCount = donationAmount > 0 ? Math.floor(donationAmount / 1) : 0;

    // Distribute tickets evenly among selected raffles
    const ticketsPerRaffle = selectedRaffles.length > 0
        ? Math.floor(ticketCount / selectedRaffles.length)
        : 0;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header style={{ backgroundColor: colors.primary }} className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-white font-bold text-xl md:text-2xl">ΛΧΑ × LBF Parents Weekend!</span>
                        </div>
                        <div className="hidden md:flex space-x-8 text-white">
                            <a href="#raffle" className="hover:text-gray-200">Raffle Items</a>
                            <a href="#donate" className="hover:text-gray-200">Donate</a>
                            <a href="#about" className="hover:text-gray-200">About</a>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-white hover:text-gray-200"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-2 py-2 bg-white rounded-md shadow-lg">
                            <a href="#raffle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Raffle Items</a>
                            <a href="#donate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Donate</a>
                            <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>About</a>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span style={{ color: colors.primary }}>Lambda Chi Alpha</span>{' '}
                            <span style={{ color: colors.secondary }}>Fundraiser</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Support our chapter and enter for a chance to win amazing prizes!
                        </p>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="#donate"
                                style={{ backgroundColor: colors.primary }}
                                className="px-8 py-3 text-base font-medium rounded-md text-white hover:bg-opacity-90 md:text-lg"
                            >
                                Donate Now
                            </a>
                            <a
                                href="#raffle"
                                style={{ backgroundColor: colors.secondary }}
                                className="ml-4 px-8 py-3 text-base font-medium rounded-md text-white hover:bg-opacity-90 md:text-lg"
                            >
                                View Prizes
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Raffle Items Section */}
            <section id="raffle" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Raffle Items
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            With each donation, you are eligible for tickets in our raffle of various prizes!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {raffleItems.map((item) => (
                            <div
                                key={item.id}
                                className={`border rounded-lg overflow-hidden shadow-md transition-all duration-200 ${selectedRaffles.includes(item.id) ? 'ring-2 ring-offset-2' : ''
                                    }`}
                                style={{
                                    borderColor: selectedRaffles.includes(item.id) ? colors.primary : 'transparent',
                                    ringColor: colors.primary
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    <p className="mt-2 text-gray-500">Ticket Price: ${item.price}</p>

                                    {submitted ? (
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600">
                                                Your tickets for this prize: <span className="font-bold">{selectedRaffles.includes(item.id) ? ticketsPerRaffle : 0}</span>
                                            </p>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => toggleRaffleSelection(item.id)}
                                            className={`mt-4 w-full px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedRaffles.includes(item.id)
                                                    ? 'bg-gray-100 text-gray-800 border-gray-300'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                                }`}
                                            style={{
                                                backgroundColor: selectedRaffles.includes(item.id) ? colors.accent : 'white',
                                                borderColor: selectedRaffles.includes(item.id) ? colors.primary : colors.accent
                                            }}
                                        >
                                            {selectedRaffles.includes(item.id) ? 'Selected' : 'Select'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section id="donate" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Make a Donation
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            Your support helps our chapter continue making an impact.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md">
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                    <DollarSign className="h-6 w-6 text-green-600" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Thank you for your donation!</h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    You have donated ${donationAmount} and received {ticketCount} raffle tickets,
                                    distributed among your selected prizes.
                                </p>
                                <div className="mt-6">
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setDonationAmount(0);
                                            setSelectedRaffles([]);
                                        }}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                                        style={{ backgroundColor: colors.primary }}
                                    >
                                        Make Another Donation
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md"
                        >
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    How much would you like to donate? <span className="text-red-500">*</span>
                                </label>

                                <div className="grid grid-cols-3 gap-3">
                                    {donationOptions.map((amount) => (
                                        <div key={amount}>
                                            <input
                                                type="radio"
                                                id={`amount-${amount}`}
                                                name="amount"
                                                value={amount}
                                                checked={donationAmount === amount}
                                                onChange={() => setDonationAmount(amount)}
                                                className="sr-only"
                                            />
                                            <label
                                                htmlFor={`amount-${amount}`}
                                                className={`block w-full py-3 text-center border rounded-md cursor-pointer focus:outline-none ${donationAmount === amount
                                                        ? 'border-2 text-white'
                                                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                                    }`}
                                                style={{
                                                    backgroundColor: donationAmount === amount ? colors.primary : 'white',
                                                    borderColor: donationAmount === amount ? colors.primary : colors.accent
                                                }}
                                            >
                                                ${amount}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Or enter custom amount:
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            min="1"
                                            value={donationOptions.includes(donationAmount) ? '' : donationAmount}
                                            onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="block text-gray-700 text-sm font-medium mb-2">
                                    You will receive <span className="font-bold">{ticketCount}</span> raffle tickets.
                                </p>

                                {ticketCount > 0 && selectedRaffles.length > 0 && (
                                    <p className="mt-2 text-sm text-gray-600">
                                        Each selected raffle will receive <span className="font-bold">{ticketsPerRaffle}</span> tickets.
                                    </p>
                                )}

                                {ticketCount > 0 && selectedRaffles.length === 0 && (
                                    <p className="mt-2 text-sm text-red-600">
                                        Please select at least one raffle item.
                                    </p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={donationAmount <= 0 || selectedRaffles.length === 0}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: colors.primary }}
                                >
                                    Complete Donation
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About Our Fundraiser
                        </h2>
                    </div>

                    <div className="prose prose-lg mx-auto">
                        <p>
                            The LXA × LBF Parents Weekend fundraiser is an annual event that helps support our chapter's operations,
                            community service initiatives, and brotherhood events. All proceeds go directly to the Lambda Chi Alpha
                            chapter to continue our tradition of excellence and service.
                        </p>

                        <p>
                            This year, we have partnered with local businesses to bring you an exciting collection of raffle prizes.
                            For every dollar you donate, you'll receive one raffle ticket that you can allocate to any prize of your choice.
                        </p>

                        <h3>How It Works</h3>
                        <ol>
                            <li>Choose your donation amount</li>
                            <li>Select which prize(s) you'd like to enter to win</li>
                            <li>Your tickets will be distributed evenly among your selected prizes</li>
                            <li>Winners will be announced at the end of Parents Weekend</li>
                        </ol>

                        <p>
                            Thank you for your support! If you have any questions, please contact our fundraising chair at
                            <a href="mailto:fundraising@lambdachi.org" className="text-blue-600"> fundraising@lambdachi.org</a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: colors.primary }} className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center md:justify-start">
                            <p className="text-white font-bold text-lg">Lambda Chi Alpha</p>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p className="text-center text-white text-sm">
                                &copy; {new Date().getFullYear()} Lambda Chi Alpha. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LambdaChiFundraiser;