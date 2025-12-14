<script>
	import {
		Html,
		Head,
		Body,
		Preview,
		Container,
		Section,
		Text,
		Button,
		Row
	} from 'better-svelte-email';

	let { name = 'there' } = $props();
</script>

<Html>
	<Head />
	<Body class="bg-background">
		<Preview preview="Welcome Email" />
		<Container class="m-8 mx-auto max-w-lg rounded-2xl border border-border bg-card p-8">
			<Section class="mx-auto text-center">
				<Text class="text-2xl font-bold text-foreground">Welcome {name}!</Text>
				<Text class="mt-3 text-muted-foreground">
					Better Svelte Email converts Svelte components into email-safe HTML.
				</Text>
				<Row class="mt-6">
					<Button
						href="https://better-svelte-email.konixy.fr/docs"
						pX={24}
						pY={14}
						class="mr-2 rounded-lg bg-primary text-primary-foreground"
					>
						Explore the docs
					</Button>
					<Button
						href="https://github.com/Konixy/better-svelte-email"
						pX={24}
						pY={14}
						class="ml-2 rounded-lg border border-border text-foreground"
					>
						or the GitHub
					</Button>
				</Row>
			</Section>
		</Container>
	</Body>
</Html>
