// --- 1. SPA DATA (10 Products per Category) ---
        const productsDB = {
            veggies: {
                title: "Farm Fresh Veggies",
                items: [
                    { name: "Organic Tomatoes", price: 60, unit: "1 kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600" },
                    { name: "Red Onions", price: 45, unit: "1 kg", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=600" },
                    { name: "Organic Potatoes", price: 40, unit: "1 kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600" },
                    { name: "Fresh Carrots", price: 55, unit: "500 g", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600" },
                    { name: "Green Bell Peppers", price: 80, unit: "500 g", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=600" },
                    { name: "Fresh Broccoli", price: 120, unit: "1 pc", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=600" },
                    { name: "Organic Spinach", price: 30, unit: "1 bunch", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600" },
                    { name: "Green Cabbage", price: 50, unit: "1 pc", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600" },
                    { name: "Cauliflower", price: 60, unit: "1 pc", img: "https://plus.unsplash.com/premium_photo-1711684803510-6f05fa515378?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Lady Finger (Okra)", price: 45, unit: "500 g", img: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&q=80&w=600" }
                ]
            },
            fruits: {
                title: "Seasonal Fruits",
                items: [
                    { name: "Alphonso Mangoes", price: 350, unit: "1 Dozen", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600" },
                    { name: "Robusta Bananas", price: 60, unit: "1 Dozen", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=600" },
                    { name: "Kashmiri Apples", price: 180, unit: "1 kg", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Nagpur Oranges", price: 120, unit: "1 kg", img: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=600" },
                    { name: "Fresh Papaya", price: 80, unit: "1 pc", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" },
                    { name: "Watermelon", price: 90, unit: "1 pc", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Black Grapes", price: 150, unit: "500 g", img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&q=80&w=600" },
                    { name: "Pineapple", price: 100, unit: "1 pc", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=600" },
                    { name: "Pomegranate", price: 200, unit: "1 kg", img: "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Guava", price: 90, unit: "1 kg", img: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&q=80&w=600" }
                ]
            },
            spices: {
                title: "Aromatic Spices",
                items: [
                    { name: "Salem Turmeric Powder", price: 120, unit: "250 g", img: "https://5.imimg.com/data5/PU/MU/RK/SELLER-8309030/salem-turmeric-powder-1000x1000.jpg" },
                    { name: "Guntur Chilli Powder", price: 140, unit: "250 g", img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600" },
                    { name: "Coriander Powder", price: 90, unit: "250 g", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" },
                    { name: "Cumin Seeds (Jeera)", price: 160, unit: "200 g", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600" },
                    { name: "Black Pepper Whole", price: 250, unit: "100 g", img: "https://images.unsplash.com/photo-1591801058986-9e28e68670f7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Ceylon Cinnamon", price: 180, unit: "50 g", img: "https://images.unsplash.com/photo-1553499944-e4297a0af1bd?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Green Cardamom", price: 300, unit: "50 g", img: "https://images.unsplash.com/photo-1642255521852-7e7c742ac58f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Cloves", price: 220, unit: "50 g", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" },
                    { name: "Mustard Seeds", price: 60, unit: "250 g", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600" },
                    { name: "Organic Garam Masala", price: 180, unit: "100 g", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600" }
                ]
            },
            oils: {
                title: "Cold Pressed Oils",
                items: [
                    { name: "Wood-Pressed Groundnut Oil", price: 320, unit: "1 Litre", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" },
                    { name: "Cold Pressed Coconut Oil", price: 380, unit: "1 Litre", img: "https://images.unsplash.com/photo-1588413333412-82148535db53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                    { name: "Sesame Oil (Gingelly)", price: 420, unit: "1 Litre", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" },
                    { name: "Yellow Mustard Oil", price: 280, unit: "1 Litre", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" },
                    { name: "Cold Pressed Sunflower Oil", price: 260, unit: "1 Litre", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" },
                    { name: "Extra Virgin Olive Oil", price: 850, unit: "500 ml", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" },
                    { name: "Sweet Almond Oil", price: 450, unit: "200 ml", img: "https://media.istockphoto.com/id/828305682/photo/almond-oil-in-glass-bottle-and-almonds-on-wooden-table.jpg?s=2048x2048&w=is&k=20&c=0D8C3yxk339PltidWZkufaQu2eIzVIiwVi1_Zo9XLwY=" },
                    { name: "Pure Castor Oil", price: 220, unit: "250 ml", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" },
                    { name: "Neem Oil", price: 180, unit: "250 ml", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" },
                    { name: "Flaxseed Oil", price: 350, unit: "250 ml", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=600" }
                ]
            }
        };

        // --- 2. SPA LOGIC (Hide/Show Sections) ---
        const mainView = document.getElementById('main-view');
        const categoryView = document.getElementById('category-view');
        const categoryGrid = document.getElementById('category-product-grid');
        const categoryTitle = document.getElementById('category-title');

        function loadCategory(e, categoryId) {
            e.preventDefault();
            
            // Get Data
            const data = productsDB[categoryId];
            if(!data) return;

            // Set Title
            categoryTitle.innerText = data.title;

            // Generate Products HTML matching original design
            categoryGrid.innerHTML = '';
            data.items.forEach((item, index) => {
                categoryGrid.innerHTML += `
                    <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group fade-in" style="animation-delay: ${index * 0.05}s">
                        <div class="relative h-48 sm:h-56 overflow-hidden">
                            <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
                            <div class="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">Organic</div>
                        </div>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="text-lg font-serif font-semibold text-gray-900 leading-tight">${item.name}</h4>
                            </div>
                            <div class="mb-4">
                                <span class="text-xl font-bold text-brand">₹${item.price}</span>
                                <span class="text-xs text-gray-500 ml-1">/ ${item.unit}</span>
                            </div>
                            <button onclick="addToCart('${item.name}', ${item.price})" class="w-full py-2.5 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-lg font-medium transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
            });

            // Toggle Views
            mainView.classList.add('hidden');
            categoryView.classList.remove('hidden');
            
            // Scroll to top to see the new category cleanly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function goHome(e) {
            if(e && e.preventDefault) e.preventDefault();
            categoryView.classList.add('hidden');
            mainView.classList.remove('hidden');
            
            // If it was a nav link, allow normal scrolling after a tiny timeout to let the view display
            if(e && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
                setTimeout(() => {
                    const targetId = e.target.getAttribute('href').substring(1);
                    const el = document.getElementById(targetId);
                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // --- 3. UI/SCROLL/NAVBAR LOGIC ---
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');
        const navIcons = document.getElementById('nav-icons');
        const mobileNavIcons = document.getElementById('mobile-nav-icons');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileOverlay = document.getElementById('mobile-menu-overlay');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
                
                logoText.classList.remove('text-white', 'drop-shadow-md');
                logoText.classList.add('text-gray-900');
                
                navLinks.classList.remove('text-white', 'drop-shadow-md');
                navLinks.classList.add('text-gray-800');
                
                navIcons.classList.remove('text-white', 'drop-shadow-md');
                navIcons.classList.add('text-gray-800');
                
                mobileNavIcons.classList.remove('text-white');
                mobileNavIcons.classList.add('text-gray-800');
            } else {
                navbar.classList.remove('nav-scrolled');
                
                logoText.classList.add('text-white', 'drop-shadow-md');
                logoText.classList.remove('text-gray-900');
                
                navLinks.classList.add('text-white', 'drop-shadow-md');
                navLinks.classList.remove('text-gray-800');
                
                navIcons.classList.add('text-white', 'drop-shadow-md');
                navIcons.classList.remove('text-gray-800');
                
                mobileNavIcons.classList.add('text-white');
                mobileNavIcons.classList.remove('text-gray-800');
            }
        });

        const revealElements = document.querySelectorAll('.reveal');
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };
        const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
        revealElements.forEach(el => {
            if (!el.classList.contains('active')) revealObserver.observe(el);
        });

        // Mobile Menu Toggle
        mobileBtn.addEventListener('click', () => {
            mobileOverlay.classList.remove('hidden');
            mobileOverlay.classList.add('flex');
        });
        
        document.getElementById('close-mobile-btn').addEventListener('click', () => {
            mobileOverlay.classList.add('hidden');
            mobileOverlay.classList.remove('flex');
        });
        
        document.querySelectorAll('.mob-link').forEach(link => {
            link.addEventListener('click', (e) => {
                mobileOverlay.classList.add('hidden');
                mobileOverlay.classList.remove('flex');
                if (link.getAttribute('href').startsWith('#')) {
                    goHome(e);
                }
            });
        });

        // --- 4. CART, AUTH & WHATSAPP LOGIC ---
        let cart = [];

        function addToCart(name, price) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name: name, price: price, qty: 1 });
            }
            updateCartUI();
        }

        function updateCartUI() {
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            document.getElementById('cart-count').innerText = totalItems;
            document.getElementById('cart-count-mobile').innerText = totalItems;
            
            const cartContainer = document.getElementById('cart-items-container');
            cartContainer.innerHTML = '';
            let grandTotal = 0;
            
            if (cart.length === 0) {
                cartContainer.innerHTML = '<p class="text-gray-500 italic p-4 text-center bg-gray-50 rounded-lg">Your cart is currently empty. Add some healthy organics!</p>';
            } else {
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.qty;
                    grandTotal += itemTotal;
                    
                    cartContainer.innerHTML += `
                        <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div>
                                <h5 class="font-bold text-gray-800">${item.name}</h5>
                                <p class="text-sm text-gray-500">₹${item.price} x ${item.qty}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-brand">₹${itemTotal}</span>
                                <button type="button" onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 transition p-2">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;
                });
            }
            document.getElementById('cart-total-amount').innerText = grandTotal;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function toggleCartModal(e) {
            if(e) e.preventDefault();
            const modal = document.getElementById('cart-modal');
            modal.classList.toggle('hidden');
            if (!modal.classList.contains('hidden')) updateCartUI();
        }

        function toggleAuthModal(id) {
            const modal = document.getElementById(id);
            modal.classList.toggle('hidden');
        }

        function processCheckout(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Your cart is empty! Please add products before checking out.");
                return;
            }
            
            const name = document.getElementById('bill-name').value;
            const phone = document.getElementById('bill-phone').value;
            const address = document.getElementById('bill-address').value;
            let orderTotal = 0;
            
            let whatsappMsg = `*New Order from Andhra Naturels* 🍃\n\n`;
            whatsappMsg += `*Customer Details:*\n`;
            whatsappMsg += `👤 Name: ${name}\n`;
            whatsappMsg += `📞 Phone: ${phone}\n`;
            whatsappMsg += `📍 Delivery Address: ${address}\n\n`;
            whatsappMsg += `*Order Items:*\n`;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.qty;
                orderTotal += itemTotal;
                whatsappMsg += `🛒 ${item.name} (Qty: ${item.qty}) - ₹${itemTotal}\n`;
            });
            
            whatsappMsg += `\n*Total Amount: ₹${orderTotal}*\n\n`;
            whatsappMsg += `Please confirm my order and share the payment details/UPI scanner. Thank you!`;
            
            const encodedMsg = encodeURIComponent(whatsappMsg);
            const targetNumber = "918919695571";
            window.open(`https://wa.me/${targetNumber}?text=${encodedMsg}`, '_blank');
            
            cart = [];
            updateCartUI();
            document.getElementById('billing-form').reset();
            toggleCartModal();
        }