document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const activityTitle = document.getElementById('activityTitle');
    const todayTable = document.getElementById('todayActivitiesTable');
    const yearlyTable = document.getElementById('yearlyActivitiesTable');

    let showingToday = true;

    toggleButton.addEventListener('click', function () {
        if (showingToday) {
            activityTitle.textContent = '年度活動';
            toggleButton.textContent = '查看今日活動';
            todayTable.style.display = 'none';
            yearlyTable.style.display = 'block';
        } else {
            activityTitle.textContent = '今日活動';
            toggleButton.textContent = '查看年度活動';
            todayTable.style.display = 'block';
            yearlyTable.style.display = 'none';
        }
        showingToday = !showingToday;
    });
});
