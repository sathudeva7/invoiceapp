export enum TEMPLATE_CATEGORIES {
  'PERSONAL_PAGES' = 'Personal Pages',
  'COMPANY_PAGES' = 'Company Pages',
}

export const PERSONAL_TEMPLATES = [
  {
    templateId: '',
    thumbnail:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHw0fHx3YXRjaHxlbnwwfDB8fHwxNzIwNzIzMjM0fDA&ixlib=rb-4.0.3&q=85',
    style: '',
    backgroundColor: '#E0F7FA',
    components: `
		<div class="flex flex-col justify-center items-center" ><body class="bg-primary-light font-sans">
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
        <!-- Header Section -->
        <div class="text-center">
            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHw0fHx3YXRjaHxlbnwwfDB8fHwxNzIwNzIzMjM0fDA&ixlib=rb-4.0.3&q=85" alt="Watch Company Logo" class="mx-auto w-24 h-24">
            <h1 class="text-4xl font-bold mt-4 text-primary-dark">Discover Timeless Elegance</h1>
            <p class="mt-2 text-lg text-gray-700">Exquisite Watches for Every Occasion</p>
        </div>

        <!-- Hero Section -->
        <div class="relative mt-6">
            <img src="https://images.unsplash.com/photo-1623998021450-85c29c644e0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHwxNnx8d2F0Y2h8ZW58MHwwfHx8MTcyMDcyMzI2M3ww&ixlib=rb-4.0.3&q=85" alt="Hero Image" class="w-full h-64 object-cover rounded-lg shadow-lg">
            <div class="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                <h2 class="text-2xl font-semibold text-white tracking-wide">Introducing Our Latest Collection</h2>
            </div>
        </div>

        <!-- Introduction Section -->
        <div class="mt-8 px-6">
            <h2 class="text-2xl font-semibold mb-4 text-primary-dark">Elevating Your Style</h2>
            <p class="text-gray-700 mb-6">Explore our newest range of watches, designed with precision and crafted with passion. Each timepiece is a blend of timeless elegance and modern sophistication.</p>
            <ul class="list-disc pl-5 text-gray-700 mb-6">
                <li>Swiss-Made Movements</li>
                <li>Luxurious Materials</li>
                <li>Water-Resistant up to 100m</li>
                <li>2-Year Warranty</li>
            </ul>
            
            <div class="text-center">
                <a href="your-website-url-here" class="btn-primary px-8 py-4 rounded-full text-lg font-bold transition duration-300">Explore Now</a>
            </div>
        </div>

        <!-- Featured Watches Section -->
        <div class="mt-8 px-6">
            <h3 class="text-xl font-semibold mb-4 text-primary-dark">Featured Watches</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHwxOHx8d2F0Y2h8ZW58MHwwfHx8MTcyMDcyMzI2M3ww&ixlib=rb-4.0.3&q=85" alt="Featured Watch 1" class="mx-auto w-48 h-auto mb-4 rounded-lg transition duration-300 transform hover:scale-105">
                    <h4 class="text-lg font-semibold text-primary-dark">Classic Silver</h4>
                    <p class="text-gray-700">$299.00</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1554151447-b9d2197448f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHwzNXx8d2F0Y2h8ZW58MHwwfHx8MTcyMDcyMzMwMHww&ixlib=rb-4.0.3&q=85" alt="Featured Watch 2" class="mx-auto w-48 h-auto mb-4 rounded-lg transition duration-300 transform hover:scale-105">
                    <h4 class="text-lg font-semibold text-primary-dark">Modern Black</h4>
                    <p class="text-gray-700">$349.00</p>
                </div>
            </div>
        </div>

        <!-- Customer Testimonials Section -->
        <div class="mt-8 px-6">
            <h3 class="text-xl font-semibold mb-2 text-primary-dark">Customer Testimonials</h3>
            <div class="space-y-6">
                <blockquote class="bg-gray-50 p-4 rounded-lg shadow-md italic border-l-4 pl-4 border-primary-dark">
                    "The Classic Silver watch is a timeless addition to my  collection. I love the quality and design!" - Alex Johnson
                </blockquote>
                <blockquote class="bg-gray-50 p-4 rounded-lg shadow-md italic border-l-4 pl-4 border-primary-dark">
                    "The Modern Black watch is sleek and sophisticated. I wear it every day." - Sarah Williams
                </blockquote>
            </div>
        </div>

        <!-- Follow Us Section -->
        <div class="text-center mt-8">
            <button class="btn-primary px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition duration-300">Follow Us</button>
        </div>

        <!-- Footer Section -->
        <div class="border-t mt-8 pt-6 text-center text-gray-700">
            <p>Thank you for choosing our watch company.</p>
            <p>For more information, visit our <a href="your-website-url-here" class="text-accent">website</a> or contact us at <a href="mailto:support@watchcompany.com" class="text-accent">support@watchcompany.com</a>.</p>
            <p class="mt-2">© 2023 Watch Company. All rights reserved.</p>
        </div>
    </div>
</body></div>
`,
    heading: 'Watch',
  },
  {
    templateId: '',
    thumbnail:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHw5fHxmYWNlJTIwY3JlYW18ZW58MHwwfHx8MTcyMDY5MzU2M3ww&ixlib=rb-4.0.3&q=85',
    style: '',
    backgroundColor: '#cac5c5',
    components: `
		<div class="flex flex-col justify-center items-center" >
		<body class="bg-gray-100 font-sans">
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
        <div class="text-center">
            <img src="https://images.unsplash.com/photo-1601049315503-07926a49f521?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1OTU4NTJ8MHwxfHNlYXJjaHwyfHxmYWNlJTIwY3JlYW18ZW58MHwwfHx8MTcyMDY5MzU2M3ww&ixlib=rb-4.0.3&q=85" alt="Matrixly Logo" class="mx-auto w-24 h-24">
            <h1 class="text-3xl font-bold mt-4">Welcome to Matrixly!</h1>
            <p class="mt-2 text-gray-600">Unlock the Power of Nature for Your Skin</p>
        </div>

        <div class="mt-6">
            <h2 class="text-2xl font-semibold mb-3">Introducing our Revolutionary Face Cream</h2>
            <p class="text-gray-700 mb-4">Matrixly brings you the finest face cream crafted from small, potent plants. Experience the essence of nature and achieve radiant, youthful skin with our exclusive formula.</p>
            <ul class="list-disc pl-5 text-gray-700 mb-6">
                <li>All-natural ingredients</li>
                <li>Perfect for all skin types</li>
                <li>Vegan and cruelty-free</li>
                <li>Clinically proven results</li>
            </ul>
            
            <div class="text-center">
                <a href="your-website-url-here" class="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition duration-300">Shop Now</a>
            </div>
        </div>

        <div class="border-t mt-8 pt-6">
            <h3 class="text-xl font-semibold mb-2">Why Choose Matrixly?</h3>
            <p class="text-gray-700">Our mission is to provide you with skin care solutions that are rooted in the power of nature. Our face cream combines science and nature to give you visibly healthier and more youthful skin.</p>
        </div>

        <div class="border-t mt-6 pt-6">
            <h3 class="text-xl font-semibold mb-2">Hear from Our Satisfied Customers</h3>
            <blockquote class="text-gray-700 italic border-l-4 pl-4 border-green-500 mb-6">
                "Matrixly has transformed my skin! I’ve never felt more confident and beautiful." - Jane Doe
            </blockquote>
            <blockquote class="text-gray-700 italic border-l-4 pl-4 border-green-500">
                "The best face cream I’ve ever used. My skin feels amazing!" - John Smith
            </blockquote>
        </div>

        <div class="text-center mt-6">
            <button class="bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-blue-600 transition duration-300">Follow Us</button>
        </div>

        <div class="border-t mt-6 pt-6 text-center text-gray-600">
            <p>Thank you for choosing Matrixly.</p>
            <p>For more information, visit our <a href="your-website-url-here" class="text-green-500">website</a> or contact us at <a href="mailto:support@matrixly.com" class="text-green-500">support@matrixly.com</a>.</p>
            <p class="mt-2">© 2023 Matrixly. All rights reserved.</p>
        </div>
    </div>
</body>
  </div>`,
    heading: 'Face Cream',
  },
  {
    templateId: '',
    thumbnail: '',
    style: '',
    backgroundColor: '#cac5c5',
    components: `<body id="itgy"><h1 class="heading"><div class="ql-editor" contenteditable="true"><p><strong style="font-size: 25px;">Welcome to a random Template</strong></p></div></h1><p class="paragraph"><div class="ql-editor" contenteditable="true"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div></p></body>`,
    heading: 'Beautiful',
  },
  {
    templateId: '',
    thumbnail: '',
    style: '',
    backgroundColor: '#cac5c5',
    components: `<body id="itgy"><h1 class="heading"><div class="ql-editor" contenteditable="true"><p><strong style="font-size: 25px;">Welcome to a random Template</strong></p></div></h1><p class="paragraph"><div class="ql-editor" contenteditable="true"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div></p></body>`,
    heading: 'Beautiful',
  },
];
export const COMPANY_TEMPLATES = [
  {
    templateId: '',
    thumbnail: '',
    style: '',
    backgroundColor: '',
    components: `<body id="itgy"><h1 class="heading"><div class="ql-editor" contenteditable="true"><p><strong style="font-size: 25px;">Welcome to a random Template</strong></p></div></h1><p class="paragraph"><div class="ql-editor" contenteditable="true"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div></p></body>`,
    heading: 'Portfolio',
  },
];
const TEMPLATES = {
  [TEMPLATE_CATEGORIES.PERSONAL_PAGES]: PERSONAL_TEMPLATES,
  [TEMPLATE_CATEGORIES.COMPANY_PAGES]: COMPANY_TEMPLATES,
};

export default TEMPLATES;
