fetch ('data.json')
	.then(
		response => response.json()
		.then (
			response => response.forEach (
				item => document.body.appendChild (document.createElement("img")).src = item.ref
			)
		)
	)