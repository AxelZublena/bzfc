<script>
	export let selected = false;
	export let title = 'Title';
	export let href = '/';
	export let src = 'img/home-icon.png';

	$: div =
		'w-0 h-0 my-0 mx-auto nav:mb-4 block nav:w-20 nav:h-20 nav:leading-10 rounded-full bg-yellow-400 nav:hover:bg-white';
	$: header = 'uppercase text-center mt-4 ' + (selected ? 'text-yellow-400' : 'text-white');
</script>

<li class="mt-0 ml-[15px] nav:my-20 nav:mx-10 inline-block">
	<a {href}
		><div class={div}>
			<img
				class="w-[25px] h-[25px] pb-[10px] nav:relative nav:left-1/4 nav:top-5 nav:h-10 nav:w-10"
				{src}
				alt={title + '-image'}
			/>
		</div>
		<h6 class={header}>{title}</h6></a
	>
</li>
