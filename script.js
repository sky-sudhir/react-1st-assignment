var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

$(function () {
    $.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', function abc(response) {



        var res = response
        let mainBox = document.getElementById("main-con")

        for (let i = 0; i <= 5; i++) {
            // console.log(res[i])

            mainBox.innerHTML += `
                    <tr class="data-row" onclick="makethisinclick(${i})">
                       <td class="column1">${res[i].id}</td>
                       <td class="column2">${res[i].firstName}</td>
                       <td class="column3">${res[i].lastName}</td>
                        <td class="column4">${res[i].email}</td>
                      <td class="column5">${res[i].phone}</td>
             </tr>
          `
        }

      
        
    })
});
function makethisinclick(pass) {

    document.getElementById("info-content").style.display = "block";
}