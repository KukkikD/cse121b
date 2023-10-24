// Family tree data stored in an array
let familyTree = [];

// DOM elements
const familyForm = document.getElementById('family-form');
const familyTreeContainer = document.getElementById('family-tree');

// Fetch external data from my Mocky.io
fetch('https://run.mocky.io/v3/536c6db0-6468-4562-8be0-993f8f97f492')
    .then(response => response.json())
    .then(data => {
        familyTree = data;
        displayFamilyTree();
    })
    .catch(error => console.error('Error fetching data:', error));

// Event listener for form submission
familyForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const relation = document.getElementById('relation').value;

    // Create a new family member object
    const newMember = {
        name,
        relation,
    };

    // Add the new member to the family tree
    familyTree.push(newMember);

    // Update the family tree display
    displayFamilyTree();
});

// Function to display the family tree
function displayFamilyTree() {
    // Clear the current content
    familyTreeContainer.innerHTML = '';

    // Create the tree structure based on familyTree array
    familyTree.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'family-member';
        memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>Relation: ${member.relation}</p>
        `;
        familyTreeContainer.appendChild(memberDiv);
    });

// Function to edit a family member
function editFamilyMember(index) {
    const newName = prompt('Edit name:', familyTree[index].name);
    if (newName !== null) {
        familyTree[index].name = newName;
        displayFamilyTree();
    }
}
// Function to delete a family member
function deleteFamilyMember(index) {
    if (confirm('Are you sure you want to delete this family member?')) {
        familyTree.splice(index, 1);
        displayFamilyTree();
    }
}

}
// Initial tree display
displayFamilyTree();