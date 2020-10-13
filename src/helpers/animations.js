// Used to apply animations in skills and projects.
export function addPageAnimations(parentDom, pageId, animationClass) {
	/**
	 * This function requires following parameters.
	 *    parentDom - reference to parentDom whitch we animate child elements.
	 *    pageId - "id" of this page so only when that page is active animatin start.
	 *    animationClass - CSS class name of animation.
	 */
	let timerCount = 1; // Keep Track of no of element. Get increase for each element. So elements appear one after another.

	// Animation only get applied if all dom elements are loaded.
	if (parentDom.current && timerCount === 1) {
		// Getting each children of given parentDom and cycle through them.
		Array.from(parentDom.current.children).forEach((child) => {
			const classList = Array.from(child.classList); // Getting current classes of element and coveting it to an array.

			// Applying animation class only if its not already added.
			if (!classList.includes(animationClass)) {
				// To make sure each animation start one after another we use settimeout.
				setTimeout(
					() => (child.className += ` animated ${animationClass}`),
					timerCount * 100
				);
				timerCount++; // Incresing timercount so next elements animation start after previous.
			}
		});
	}
}
