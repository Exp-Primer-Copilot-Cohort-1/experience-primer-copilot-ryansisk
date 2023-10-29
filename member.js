function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    member.style.display = "block";
    skills.style.display = "none";
    memberButton.style.backgroundColor = "white";
    skillsButton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}