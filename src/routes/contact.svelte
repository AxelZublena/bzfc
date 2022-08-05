<script>
	import Card from '$lib/Card.svelte';
</script>

<Card>
	<div class="text-left -mt-6 px-8 grid grid-cols-3 gap-x-4 w-full">
		<div class="col-span-1">
			<p class="text-sm text-gray-800 font-light leading-6 pr-12">
				Maecenas imperdiet sagittis lacus, ut consequat velit iaculis id. Praesent eu consequat
				urna. Morbi justo dolor, ornare sed lorem et, auctor iaculis ligula.
				<br /><br />
				<em>5566 Donec mollis libero<br />at metus luctus 10660</em>
			</p>
		</div>
		<div class="col-span-2">
			<form id="contact" class="flex flex-wrap w-full" action="" method="post">
				<div class="flex-none w-1/2">
					<input
						name="name"
						type="text"
						class="mb-[20px] pl-[15px] pr-24 h-[40px] inline-block text-black bg-gray-100 text-sm leading-10 outline-0"
						id="name"
						placeholder="Your Name"
						required
					/>
				</div>
				<div class="flex-none w-1/2">
					<input
						name="email"
						type="email"
						class="mb-[20px] pl-[15px] w-full h-[40px] inline-block text-black bg-gray-100 text-sm leading-10 outline-0"
						id="email"
						placeholder="Email"
						required
					/>
				</div>
				<div class="flex-none w-full">
					<textarea
						name="message"
						rows="6"
						class="mb-[20px] pl-[15px] max-w-full inline-block text-black bg-gray-100 text-sm leading-10 outline-0 w-full h-[140px]"
						id="message"
						placeholder="Message"
						required
					/>
				</div>
				<div class="">
					<button
						type="submit"
						id="form-submit"
						class="inline-block bg-yellow-400 text-gray-800 py-[12px] px-[18px] font-normal rounded-md"
						>Send Message</button
					>
				</div>
			</form>
		</div>
	</div>
</Card>
