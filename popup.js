console.log("Inicia script!!!")

document.getElementById("fill-fields").addEventListener("click", () => {  
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	  chrome.scripting.executeScript({
		target: { tabId: tabs[0].id },
		func: fillFieldsWithTen
	  });
	});
  }); 

  function fillFieldsWithTen() { 
	
	ids = [
		'frame_group_103', 
		'frame_group_100'
	]

	console.log(ids)

	for (let id of ids) { 
		console.log(id);

		var iframe_document = document.getElementById(id).contentWindow.document;
		console.log(iframe_document);

		const table = iframe_document.querySelector("table.gridContainerTable");
		console.log(table); // Verifica se a tabela foi encontrada  

		const inputs = iframe_document.querySelectorAll("input[name^='score']"); 
		console.log(inputs);
	
		// Preenche cada input selecionado com o valor 10
		inputs.forEach(input => {
		input.value = "10";
		}); 
	}

	// const iframe_document2 = document.getElementById("frame_group_103").contentWindow.document;
	// console.log(iframe_document2); // Verifica se a tabela foi encontrada  

	// const table2 = iframe_document2.querySelector("table.gridContainerTable");
	// console.log(table2); // Verifica se a tabela foi encontrada  

	// const inputs2 = iframe_document2.querySelectorAll("input[name^='score']");
	// console.log("cliquei no botão!");
	// console.log(inputs2);
  
	// // Preenche cada input selecionado com o valor 10
	// inputs2.forEach(input2 => {
 	// 	input2.value = "10";
	// });

  }
  
  
  