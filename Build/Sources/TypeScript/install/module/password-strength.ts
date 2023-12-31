/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

import $ from 'jquery';

class PasswordStrength {
  public initialize(field: string): void {
    // Simple password strength indicator
    $(document).on('keyup', field, (event: JQueryEventObject): void => {
      const $this = $(event.currentTarget);
      const value = $this.val();
      const strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g');
      const mediumRegex = new RegExp('^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$', 'g');
      const enoughRegex = new RegExp('(?=.{8,}).*', 'g');

      if (value.length === 0) {
        $this.attr('style', 'background-color:#FBB19B; border:1px solid #DC4C42');
      } else if (!enoughRegex.test(value)) {
        $this.attr('style', 'background-color:#FBB19B; border:1px solid #DC4C42');
      } else if (strongRegex.test(value)) {
        $this.attr('style', 'background-color:#CDEACA; border:1px solid #58B548');
      } else if (mediumRegex.test(value)) {
        $this.attr('style', 'background-color:#FBFFB3; border:1px solid #C4B70D');
      } else {
        $this.attr('style', 'background-color:#FBFFB3; border:1px solid #C4B70D');
      }
    });
  }
}

export default new PasswordStrength();
