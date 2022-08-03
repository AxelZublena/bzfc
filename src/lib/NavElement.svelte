<script>
	export let selected = false;
	export let title = 'Title';
	export let href = '/';
	export let src = 'img/home-icon.png';

	$: div = 'my-0 mx-auto mb-4 block w-20 h-20 leading-10 rounded-full bg-yellow-400 hover:bg-white';
	$: header = 'uppercase text-center mt-4 ' + (selected ? 'text-yellow-400' : 'text-white');
</script>

<li class="my-20 mx-10 inline-block">
	<a {href}
		><div class={div}>
			<img class="relative left-1/4 top-5 h-10 w-10" {src} alt={title + '-image'} />
		</div>
		<h6 class={header}>{title}</h6></a
	>
</li>
