import { HTMLCollectionHelper } from "./htmlCollectionHelper";

/**
 * @class HTMLTagHelper
 * Class provides static methods to perform checks and operations on arrays
 */

export class HTMLTagHelper {
	// Class Methods

	/**
     * Properly secures a collection of anchor tags that make use of target="_blank".
     * @param {HTMLCollection} htmlCollection - Collection of anchor tags to be secured.
     * @return {void}
     */
	static secureTargetBlankAnchorTags(htmlCollection) {
		let arrayOfAnchorTags = HTMLCollectionHelper.convertCollectionToArray(htmlCollection);

		for (let anchorTag of arrayOfAnchorTags) {
			if (HTMLTagHelper.isTargetBlankSecure(anchorTag)) {
				continue;
			} else if (anchorTag.rel !== "") {
				anchorTag.rel += " noopener noreferrer"; // Add space between previous attribute value and noopener
			} else {
				anchorTag.rel = "noopener noreferrer";
			}
		}  
	}

	/**
     * Checks to see if anchor elements containing target="_blank" are properly secured.
     * @param {HTMLAnchorElement} anchorTag - Anchor tag to be checked.
     * @return {boolean} - Return a boolean based on if an element where target="_blank" also includes noopener and noreferrer in the rel attribute.
     */
	static isTargetBlankSecure(anchorTag) {
		if (anchorTag.target === "_blank") {
			return (anchorTag.rel.includes("noopener noreferrer"));
		}
	}
}