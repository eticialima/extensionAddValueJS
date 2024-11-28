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

	var iframe_document = document.getElementById('frame_group_100').contentWindow.document;
	console.log(iframe_document);

	const table = iframe_document.querySelector("table.gridContainerTable");
	console.log(table); // Verifica se a tabela foi encontrada  

	const inputs = iframe_document.querySelectorAll("input[name^='score']");
	console.log("cliquei no botão!");
	console.log(inputs);
  
	// Preenche cada input selecionado com o valor 10
	inputs.forEach(input => {
	  input.value = "10";
	});
  }
  
  
  