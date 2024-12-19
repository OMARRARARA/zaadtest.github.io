document.addEventListener("DOMContentLoaded", function () {
		const input = document.getElementById("countryInput");
		const select = document.getElementById("countrySelect");
		const error = document.getElementById("countryError");

		const options = Array.from(select.options).map(option => ({
		  value: option.value,
		  label: option.textContent,
		}));

		input.addEventListener("input", function () {
		  const searchText = input.value.toLowerCase();
		  const matchingOptions = options.filter(option =>
			option.label.toLowerCase().includes(searchText)
		  );

		  if (matchingOptions.length) {
			const datalist = document.createElement("ul");
			datalist.className = "autocomplete-list";
			datalist.style.position = "absolute";
			datalist.style.background = "#fff";
			datalist.style.border = "1px solid #ccc";
			datalist.style.listStyleType = "none";
			datalist.style.padding = "0";
			datalist.style.margin = "0";
			datalist.style.maxHeight = "150px";
			datalist.style.overflowY = "auto";
			datalist.style.width = input.offsetWidth + "px";

			datalist.innerHTML = matchingOptions
			  .map(
				option => `<li style="padding: 5px; cursor: pointer;" data-value="${option.value}">${option.label}</li>`
			  )
			  .join("");

			input.parentNode.appendChild(datalist);

			datalist.addEventListener("click", function (e) {
			  if (e.target.tagName === "LI") {
				input.value = e.target.textContent;
				input.dataset.value = e.target.dataset.value;
				datalist.remove();
				error.textContent = "";
			  }
			});

			document.addEventListener(
			  "click",
			  function () {
				datalist.remove();
			  },
			  { once: true }
			);
		  } else {
			error.textContent = "لا توجد نتائج مطابقة.";
		  }
		});
	  });