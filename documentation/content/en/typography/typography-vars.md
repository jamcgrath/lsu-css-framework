---
title: Typography vars
description: ""
position: 13
category: Typography

fsvar: {
	head: ["Var", "rem","px"],
	rows: [
		["--title-1","5rem","80px"],
		["--title-2","4rem","64px"],
		["--title-3","3rem","48px"],
		["--title-4","2.5rem","40px"],
		["--title-5","2rem","32px"],
		["--title-6","1.5rem","24px"],
		["--title-7","1.25rem","20px"],
		["--copy","1.125rem","18px"],
		["--body","1rem","16px"],
		["--label","0.875rem","14px"],
		["--caption","0.75rem","12px"],
		["--overline-big","0.6875rem","11px"],
		["--small","0.625rem","10px"],
		["--overline-small","0.5625rem","9px"],
		["","",""],
		["--quote","var(--title-4)",""],
		["--title-1-display","var(--title-2)",""],
		["--title-2-display","var(--title-3)",""],
		["--title-3-display","var(--title-4)",""],
		["--title-4-display","var(--title-5)",""],
		["--title-5-display","var(--title-6)",""],
		["--title-6-display","var(--title-7)",""],
	]
}

fweight: {
	head: ["var", "weight"],
	rows: [
		["--fw100","100"],
		["--fw200","200"],
		["--fw300","300"],
		["--fw400","400"],
		["--fw500","500"],
		["--fw600","600"],
		["--fw700","700"],
		["--fw800","800"],
		["--fw900","900"],
		["",""],
		["--thin","var(--fw100)"],
		["--extra-light","var(--fw200)"],
		["--light","var(--fw300)"],
		["--regular","var(--fw400)"],
		["--medium","var(--fw500)"],
		["--semi-bold","var(--fw600)"],
		["--bold","var(--fw700)"],
		["--extra-bold","var(--fw800)"],
		["--black-bold","var(--fw900)"],
	]
}

letterspace: {
	head: ["var", "rem", "px"],
	rows: [
		["--letter-spacing","",""],
		["--letter-spacing-1","-0.0078125rem","-0.25px"],
		["--letter-spacing-2","-0.015625rem","-0.5px"],
		["--letter-spacing-3","-0.03125rem","-0.75px"],
		["--letter-spacing-4","-0.0625rem","-1px"],
		["--letter-spacing-5","-0.078125rem","-1.25px"],
		["--letter-spacing-6","-0.09375rem","-1.5px"],
		["--letter-spacing-7","-0.125rem","-2px"],
	]
}

fontmisc: {
	head: ["var", "value"],
	rows: [
		["--inter","'Inter', sans-serif"],
		["--line-height","1.3"]
	]
}
---

## Font size

<c-table pn="fsvar"></c-table>

## Font weight

<c-table pn="fweight"></c-table>

## Letter Spacing

<c-table pn="letterspace"></c-table>

## Misc

<c-table pn="fontmisc"></c-table>
