
// make array with 3 students names
const nameList = ['justin', 'maryam', 'sterling'];


// askes user to input number of people (i.e, enter 6 for this question)
const totalPeople = parseInt(prompt('How many people are in the class?'));

for (let i = 3; i < totalPeople; i++) {
    const newName = prompt(`Enter person number ${i+1}'s name:`);
  nameList.push(newName);
}

// displays names in console

for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}

// displays names in alert page
for (let i = 0; i < nameList.length; i++){
  const name = nameList[i];
  alert(name);
}
