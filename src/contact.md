---
layout: base.njk
title: Coming Soon | Vigorous Roofing
---

<section class=" bg-brand-dark-grey/90 flex flex-col items-center py-16 px-4">
    <div class="max-w-2xl w-full text-center">
        <h1 class="text-3xl font-bold text-[#3d3e3f] mb-2">Get a Quote</h1>
        <p class="text-gray-600 mb-10">Serving Dallas-Fort Worth with quality roofing and construction needs.</p>
    </div>

    <form action="https://api.web3forms.com/submit" method="POST" class="w-full max-w-2xl space-y-6">
        <input type="hidden" name="access_key" value="30289b05-2470-40da-b943-2a8f764bc8ac">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-semibold text-gray-700" for="name">Name</label>
                <input name="name" id="name" type="text" required
                    class="w-full mt-1 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#3d3e3f] focus:outline-none bg-white">
            </div>
            <div>
                <label class="block text-sm font-semibold text-gray-700" for="email">Email</label>
                <input name="email" id="email" type="email" required
                    class="w-full mt-1 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#3d3e3f] focus:outline-none bg-white">
            </div>
        </div>

        <div>
            <label class="block text-sm font-semibold text-gray-700" for="message">Message</label>
            <textarea name="message" id="message" rows="5" required
                class="w-full mt-1 p-3 border border-gray-300 rounded resize-none focus:ring-2 focus:ring-[#3d3e3f] focus:outline-none bg-white"
                placeholder="How can we help with your roof?"></textarea>
        </div>

        <button type="submit"
            class="w-full md:w-auto px-8 py-3 bg-[#3d3e3f] text-white font-bold rounded hover:bg-black active:scale-95 transition-all shadow-md">
            Send Message
        </button>
    </form>

</section>
