console.log("started");

let aa = getValue()
  .then((data) => {
    const issuesContainer = document.getElementById("issues-container");
    data.map((issue) => {
      const issueElement = document.createElement("div");
      issueElement.className = "issue";
      issueElement.innerHTML = `<strong>Issue #${issue.number}:</strong> ${issue.title}`;
      issuesContainer.appendChild(issueElement);
    });
  })
  .catch(() => {
    console.log("Error");
  });

console.log("Ended");

async function getValue() {
  const data = await fetch(
    "https://api.github.com/repos/hadley/ggplot2/issues"
  );
  const jsonData = data.json();
  return jsonData;
}
