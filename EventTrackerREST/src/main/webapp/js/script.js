window.addEventListener('load', function(e) {
  console.log('document loaded');
  getActivities();

});


function getActivities() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/activities");
  var activityArr = [];
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      activityArr = JSON.parse(xhr.responseText);
//      console.log(xhr.responseText);
      showActivities(activityArr);
    } else {
      console.log(xhr.readyState + " " + xhr.status);
    }
    if (xhr.readState === 4 && xhr.status >= 400) {
      console.log(xhr.readyState + " " + xhr.status)
    }
  };
  xhr.send(null);

  showActivities(activityArr);
}

function showActivities(activityArr) {
 
  let dataDiv = document.getElementById('activityData');
  dataDiv.textContent = '';

  let table = document.createElement('table');
  document.body.appendChild(table);

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let thId = document.createElement('th');
  tr.appendChild(thId);
  thId.textContent = 'Id';

  let thdate = document.createElement('th');
  tr.appendChild(thdate);
  thdate.textContent = 'Date';

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Activity Name';

  let th2 = document.createElement('th');
  tr.appendChild(th2);
  th2.textContent = 'Areas Worked';

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Sets';

  let th4 = document.createElement('th');
  tr.appendChild(th4);
  th4.textContent = 'Reps';

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);


  for (let i = 0; i < activityArr.length; i++) {
    let trMain = document.createElement('tr');
    tbody.appendChild(trMain);

    let tdActivityId = document.createElement('td');
    tdActivityId.textContent = activityArr[i].id;
    trMain.appendChild(tdActivityId);

    let tddate = document.createElement('td');
    tddate.textContent = activityArr[i].date;
    trMain.appendChild(tddate);

    let tdActivityName = document.createElement('td');
    tdActivityName.textContent = activityArr[i].activityName;
    trMain.appendChild(tdActivityName);

    let tdbodyPart = document.createElement('td');
    tdbodyPart.textContent = activityArr[i].bodyPart;
    trMain.appendChild(tdbodyPart);

    let tdSets = document.createElement('td');
    tdSets.textContent = activityArr[i].sets;
    trMain.appendChild(tdSets);

    let tdReps = document.createElement('td');
    tdReps.textContent = activityArr[i].reps;
    trMain.appendChild(tdReps);

    let updatebtn = document.createElement('button');
    updatebtn.textContent = 'Update';
    trMain.appendChild(updatebtn);

    let clearbtn = document.createElement('button');
    clearbtn.textContent = 'Delete';
    trMain.appendChild(clearbtn);

    clearbtn.addEventListener('click', function(e) {
      e.preventDefault;

      let conf = confirm("Delete Activity?");
      if (conf) {

        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'api/activities/' + activityArr[i].id, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(null);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status < 400) {
        	  console.log('Activity Deleted');
        	  getActivities();
          }
          else if (xhr.readyState === 4 && xhr.status >= 400) {
        	  console.log(xhr.status + ': ' + xhr.responseText);
          }
        }
      }
     
    });

dataDiv.appendChild(table);

  }
}

function newActivity(){
	
	let form = document.getElementById('newActivityForm')
	let name = form.activityName.value;
	let area = form.bodyPart.value;
	let sets = form.sets.value;
	let reps = form.reps.value;
	
	form.submit.addEventListener('click', function(e){
		let activity = JSON.stringify({
			"activityName": name,
			"bodyPart": area,
			"sets": sets,
			"reps": reps
		})
		var xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/activities', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(activity);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status < 400) {
        	  console.log('Activity Added');
//        	  xhr.send(activity);
        	  getActivities();
          }
          else if (xhr.readyState === 4 && xhr.status >= 400) {
        	  console.log(xhr.status + ': ' + xhr.responseText);
          }
        }
		
	})
	
	
}
