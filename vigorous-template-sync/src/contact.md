---
layout: base.njk
title: Contact Us for a Free Estimate
description: Contact Vigorous Roofing & Construction for a free roof inspection and estimate in Dallas-Fort Worth. Call (214) 708-7370 or send us your project details. Se habla español.
templateEngineOverride: njk
permalink: /contact/
---
<section class="bg-brand-dark-grey/90 py-20 px-4">
<div class="max-w-2xl mx-auto">
<div class="text-center mb-12">
<h1 class="text-5xl font-black text-white tracking-tight">
Get Your Free Estimate
</h1>
<p class="text-brand-primary font-bold uppercase tracking-widest mt-3">
Se Habla Español
</p>
<p class="text-gray-300 mt-4 text-lg">
Serving {{ business.serviceArea }} homeowners and businesses with dependable roofing and construction services.
</p>
<a href="tel:{{ business.phone }}" class="inline-block mt-6 text-brand-primary font-black text-2xl hover:underline">
{{ business.phoneDisplay }}
</a>
</div>
{% set compact = false %}
{% include "partials/contact-form.njk" %}
</div>
</section>
