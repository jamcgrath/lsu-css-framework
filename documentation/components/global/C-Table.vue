<template>
	<div class="c-table">
		<table class="table border-collapse border border-slate-400">
			<thead>
				<tr>
					<th
						v-for="(title, index) in tableData.head"
						:key="index"
						class="border border-slate-300 bg-gray-300 pl-2 text-base"
						v-text="title"
					></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rIndex) in tableData.rows" :key="rIndex">
					<td
						v-for="(cell, cIndex) in row"
						:key="cIndex"
						class="border border-slate-300 text-base"
					>
						<template v-if="Array.isArray(cell)">
							<button
								v-for="(text, tIndex) in cell"
								:key="tIndex"
								v-html="text"
								@click="copyToClipboard(text)"
								class="copy-button block px-1"
							></button>
						</template>
						<button
							v-else-if="cell.length > 0"
							v-html="cell"
							@click="copyToClipboard(cell)"
							class="copy-button block px-1"
						></button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		props: ["pn", "mq"],
		computed: {
			tableData() {
				return this.$parent.document[this.pn];
			},
		},
		methods: {
			async copyToClipboard(text) {
				const button = event.target;
				try {
					await navigator.clipboard.writeText(text);
					button.classList.add("copied");
				} catch (err) {
					console.error("Failed to copy text: ", err);
				} finally {
					setTimeout(() => {
						button.classList.remove("copied");
					}, 1000);
				}
			},
		},
	};
</script>

<style>
	.prose tbody td:first-child,
	.prose thead th:first-child {
		padding-left: 0.5714286em;
	}

	.prose thead th {
		padding-top: 0.5714286em;
	}

	.copy-button {
		font-size: inherit;
		display: flex;
		align-items: center;
		position: relative;
	}
	.copy-button:focus {
		outline: none;
	}
	.copy-button:focus-visible {
		outline: 2px solid #0070f3;
	}
	.copy-button:after {
		opacity: 0;
		transition: opacity 0.15s linear;
		content: "Copied";
		font-weight: 600;
		background: lightgreen;
		padding: 2px 4px;
		border-radius: 3px;
		font-size: 0.75rem;
		line-height: 1;
		letter-spacing: 0.5px;
		position: absolute;
		left: 100%;
	}
	.copied:after {
		opacity: 1;
	}
</style>