window.addEventListener('load', function(e) {
  console.log('document loaded');
  getActivities();
  newActivity();

});

//code to retrieve all activities from the database
function getActivities() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/activities");
  var activityArr = [];
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      activityArr = JSON.parse(xhr.responseText);

      showActivities(activityArr);
    } else {
      console.log(xhr.readyState + " " + xhr.status);
    }
    if (xhr.readState === 4 && xhr.status >= 400) {
      console.log(xhr.readyState + " " + xhr.status)
    }
  };
  xhr.send(null);

}
//code to build a table to display all activities
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

    //creates an update button
    let updatebtn = document.createElement('button');
    updatebtn.textContent = 'Update';
    trMain.appendChild(updatebtn);

    //hides the update form until updatebtn is clicked
    document.getElementById('detail').style.visibility = "hidden";

    // displays the update form to update the selected activity
    updatebtn.addEventListener('click', function(e) {
    document.getElementById('detail').style.visibility = "visible";

      //    	var detail = document.getElementById('detail');
      //      	document.detail.getElementById('activityName1').textContent = activityArr[i].activityName;
      //      	document.detail.getElementById('bodyPart1').textContent = activityArr[i].bodyPart;
      //      	document.detail.getElementById('sets1').textContent = activityArr[i].sets;
      //      	document.detail.getElementById('reps1').textContent = activityArr[i].reps;

      e.preventDefault;
      var element = e.target;
      
      //will update the activity when the submit button is clicked
      document.updateActivityForm.submit.addEventListener('click', function(e) {

        e.preventDefault();
        console.log('hai');

        let name = updateActivityForm.activityName.value;
        let area = updateActivityForm.bodyPart.value;
        let sets = updateActivityForm.sets.value;
        let reps = updateActivityForm.reps.value;

        let activity = JSON.stringify({
          "activityName": name,
          "bodyPart": area,
          "sets": sets,
          "reps": reps
        })
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', 'api/activities/' + activityArr[i].id, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(activity);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status < 400) {
            console.log('Activity Updated');

            getActivities();
            updateActivityForm.reset();
          } else if (xhr.readyState === 4 && xhr.status >= 400) {
            console.log(xhr.status + ': ' + xhr.responseText);
          }
        }

      })

    })

    //code to delete an activity
    let clearbtn = document.createElement('button');
    clearbtn.textContent = 'Delete';
    trMain.appendChild(clearbtn)

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
          } else if (xhr.readyState === 4 && xhr.status >= 400) {
            console.log(xhr.status + ': ' + xhr.responseText);
          }
        }
      }

    });

    dataDiv.appendChild(table);

  }
}
//code to create a new activity using a form on the index page
function newActivity() {
  document.newActivityForm.submit.addEventListener('click', function(e) {

    e.preventDefault();
    console.log('hai');

    let name = newActivityForm.activityName.value;
    let area = newActivityForm.bodyPart.value;
    let sets = newActivityForm.sets.value;
    let reps = newActivityForm.reps.value;

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

        getActivities();
        newActivityForm.reset();
      } else if (xhr.readyState === 4 && xhr.status >= 400) {
        console.log(xhr.status + ': ' + xhr.responseText);
      }
    }

  })
}
