<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-5">
		<div class="container">
			<a class="navbar-brand" :href="links.docs">🦄 Vue UnicornLog</a>
			<button
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				class="navbar-toggler"
				data-bs-target="#navbarSupportedContent"
				data-bs-toggle="collapse"
				type="button"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbarSupportedContent" class="collapse navbar-collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a aria-current="page" class="nav-link active" :href="links.docs">
							Home
						</a>
					</li>
					<li class="nav-item dropdown">
						<a
							id="docs-dropdown"
							aria-expanded="false"
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
						>
							Docs
						</a>
						<ul
							aria-labelledby="docs-dropdown"
							class="dropdown-menu dropdown-menu-dark"
						>
							<li>
								<a class="dropdown-item" href="#ul-installation">
									Installation
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-usage">Usage</a>
							</li>

							<li><hr class="dropdown-divider" /></li>

							<!-- Options -->
							<li><h6 class="dropdown-header">Options</h6></li>
							<li>
								<a class="dropdown-item" href="#ul-plugin-options">
									Plugin Options
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-log-options">Log Options</a>
							</li>

							<li><hr class="dropdown-divider" /></li>

							<!-- Methods -->
							<li><h6 class="dropdown-header">Methods</h6></li>
							<li>
								<a class="dropdown-item" href="#ul-instance-methods">
									Instance Methods
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#ul-console-methods">
									Console Methods
								</a>
							</li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<a class="dropdown-item" href="#ul-examples">Examples</a>
							</li>
						</ul>
					</li>

					<!-- Examples -->
					<li class="nav-item dropdown">
						<a
							id="examples-dropdown"
							aria-expanded="false"
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
						>
							Examples
						</a>
						<ul
							aria-labelledby="examples-dropdown"
							class="dropdown-menu dropdown-menu-dark"
						>
							<li>
								<a class="dropdown-item" href="#simple-examples">Simple</a>
							</li>
							<li><h6 class="dropdown-header">Options</h6></li>
							<li>
								<a class="dropdown-item" href="#text-examples">text</a>
							</li>
							<li>
								<a class="dropdown-item" href="#type-examples">type</a>
							</li>
							<li>
								<a class="dropdown-item" href="#styles-examples">styles</a>
							</li>
							<li>
								<a class="dropdown-item" href="#disabled-examples">disabled</a>
							</li>
							<li>
								<a class="dropdown-item" href="#logPrefix-examples">
									logPrefix
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#magical-examples">magical</a>
							</li>
							<li>
								<a class="dropdown-item" href="#name-examples">name</a>
							</li>
							<li>
								<a class="dropdown-item" href="#objects-examples">objects</a>
							</li>
							<li>
								<a class="dropdown-item" href="#array-examples">array</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" :href="links.github">GitHub</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" :href="links.npm">NPM Package</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
	name: 'NavBar',
	data: () => ({
		links: {
			docs: 'https://webdevnerdstuff.github.io/vue-unicorn-log/',
			github: 'https://github.com/webdevnerdstuff/vue-unicorn-log',
			npm: 'https://www.npmjs.com/package/vue-unicorn-log',
		},
	}),
};
</script>

<style lang="scss">
</style>
