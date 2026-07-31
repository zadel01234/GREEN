const fs = require('fs');
const path = require('path');

// Rotating pool of tips — feel free to edit/expand with your own notes,
// React/MUI patterns you've learned, or things you want to remember.
const tips = [
  "React: useMemo only helps if the computation is actually expensive — measure before reaching for it.",
  "MUI: sx prop values re-create objects on every render; use styled() for anything performance-sensitive.",
  "Git: `git commit --fixup` + `git rebase -i --autosquash` keeps history clean when fixing earlier commits.",
  "React Native: FlatList's getItemLayout avoids expensive layout measurement for fixed-height rows.",
  "JS: structuredClone() is now widely supported and beats JSON.parse(JSON.stringify()) for deep clones.",
  "MUI: theme.palette.mode-aware components should read from useTheme(), not hardcode hex values.",
  "TypeScript: prefer `satisfies` over type assertions when you want inference AND type checking.",
  "React: keys should be stable and unique — array index keys break state when list order changes.",
  "CSS: `gap` works in flexbox now, not just grid — no more margin-hack spacing between items.",
  "Firebase: Firestore listeners leak if not unsubscribed on unmount — always return the cleanup function.",
  "Node: `Promise.allSettled` is safer than `Promise.all` when you don't want one rejection to kill the batch.",
  "React: Context re-renders every consumer on change — split contexts by update frequency.",
  "Expo: expo-notifications requires a physical device for push testing — simulators won't receive them.",
  "Accessibility: focus outlines exist for a reason — hide them only if you provide an alternative focus style.",
  "Git: `git bisect` is faster than manually hunting for which commit introduced a bug.",
  "React: useEffect cleanup runs before the next effect AND on unmount — don't forget the first case.",
  "MUI DataGrid: virtualization means offscreen rows aren't in the DOM — don't rely on querySelector for rows.",
  "JS: Array.prototype.at(-1) is a clean alternative to arr[arr.length - 1].",
  "Design systems: define spacing/color tokens once — hardcoded values are the first thing that drifts.",
  "React: derived state belongs in render, not in useEffect + setState — it just costs an extra render.",
  "React/MUI patterns: leverage the power of these libraries to build more maintainable and performant UIs.",
  "PWA: Progressive Web Apps can be installed on mobile devices and desktops, providing a native-like experience.",
];

const today = new Date().toISOString().split('T')[0];

// Pick a tip based on day-of-year so it rotates predictably without storing state.
const start = new Date(new Date().getFullYear(), 0, 0);
const diff = new Date() - start;
const dayOfYear = Math.floor(diff / 86400000);
const tip = tips[dayOfYear % tips.length];

const entry = `\n## ${today}\n\n${tip}\n`;

const logPath = path.join(__dirname, '..', 'LOG.md');
fs.appendFileSync(logPath, entry);

console.log(`Added entry for ${today}: ${tip}`);
