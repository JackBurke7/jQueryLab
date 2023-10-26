$(document).ready(function() {
    const skillInput = $('#skill-input');
    const addSkillButton = $('#add-skill');
    const skillList = $('#skill-list');

addSkillButton.click(function() {
    const skillText = skillInput.val().trim();
        if (skillText) {
    const skillItem = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>');
        skillItem.text(skillText);
    const removeButton = $('<button class="btn btn-danger btn-sm">Remove</button>');
        removeButton.click(function() {
        skillItem.remove();
    });
        skillItem.append(removeButton);
        skillList.append(skillItem);
        skillInput.val('');
        }
    });
});
