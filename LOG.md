# Daily Dev Log

A running log of daily dev tips, auto-updated by GitHub Actions.

## 2026-07-31

Git: `git bisect` is faster than manually hunting for which commit introduced a bug.

## 2026-08-01

React: useEffect cleanup runs before the next effect AND on unmount — don't forget the first case.

## 2026-08-02

MUI DataGrid: virtualization means offscreen rows aren't in the DOM — don't rely on querySelector for rows.

## 2026-08-02

MUI DataGrid: virtualization means offscreen rows aren't in the DOM — don't rely on querySelector for rows.

## 2026-08-03

JS: Array.prototype.at(-1) is a clean alternative to arr[arr.length - 1].

## 2026-08-04

Design systems: define spacing/color tokens once — hardcoded values are the first thing that drifts.

## 2026-08-05

React: derived state belongs in render, not in useEffect + setState — it just costs an extra render.

## 2026-08-06

React/MUI patterns: leverage the power of these libraries to build more maintainable and performant UIs.

## 2026-08-07

PWA: Progressive Web Apps can be installed on mobile devices and desktops, providing a native-like experience.

## 2026-08-08

React: useMemo only helps if the computation is actually expensive — measure before reaching for it.

## 2026-08-09

MUI: sx prop values re-create objects on every render; use styled() for anything performance-sensitive.

## 2026-08-10

Git: `git commit --fixup` + `git rebase -i --autosquash` keeps history clean when fixing earlier commits.

## 2026-08-11

React Native: FlatList's getItemLayout avoids expensive layout measurement for fixed-height rows.

## 2026-08-12

JS: structuredClone() is now widely supported and beats JSON.parse(JSON.stringify()) for deep clones.
