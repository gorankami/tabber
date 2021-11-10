export function sectionToTab(section) {
  const tab = ["-", "-", "-", "-", "-", "-"];
  section.forEach((chord) => {
    chord.forEach((note, i) => (tab[i] += `${note}-`));
  });
  return tab;
}
