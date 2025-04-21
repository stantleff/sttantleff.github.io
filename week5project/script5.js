document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { name: "Intro to Programming", prereqs: "None" },
        { name: "Data Structures", prereqs: "Intro to Programming" },
        { name: "Web Development", prereqs: "None" },
        { name: "Algorithms", prereqs: "Data Structures" }
    ];

    const courseList = document.getElementById("courses");
    const dropzones = document.querySelectorAll(".dropzone");

    function createCourseItem(course, index) {
        const li = document.createElement("li");
        li.textContent = course.name;
        li.draggable = true;
        li.dataset.index = index;
        
        li.addEventListener("click", () => {
            document.getElementById("course-details").textContent = 
                `${course.name} - Prerequisites: ${course.prereqs}`;
        });

        li.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", index);
        });

        return li;
    }

    courses.forEach((course, index) => {
        courseList.appendChild(createCourseItem(course, index));
    });

    dropzones.forEach(zone => {
        zone.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        zone.addEventListener("drop", (event) => {
            event.preventDefault();
            const index = event.dataTransfer.getData("text/plain");
            const draggedItem = document.querySelector(`[data-index='${index}']`);

            if (draggedItem) {
                zone.appendChild(draggedItem);
            }
        });
    });
});

