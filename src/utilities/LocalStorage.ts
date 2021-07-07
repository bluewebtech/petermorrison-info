export default class LocalStorage {
  /**
   * Remove the local storage item.
   *
   * @param {String} name
   * @return {Void}
   */
  static delete(name: string): void {
    localStorage.remove(name);
  }

  /**
   * Get the parsed and base64 decoded local storage data.
   *
   * @param {String} name
   * @return {Mixed}
   */
  static get(name: string): any {
    const storage = localStorage.getItem(name);

    if (storage === null) {
      return false;
    }

    return JSON.parse(atob(storage));
  }

  /**
   * Check if the local storage exists.
   *
   * @param {String} name
   * @return {Boolean}
   */
  static has(name: string): boolean {
    return (localStorage.getItem(name) !== null);
  }

  /**
   * Set the string and base64 encoded local storage data.
   *
   * @param {String} name
   * @param {Mixed} payload
   * @return {String}
   */
  static set(name: string, payload: any): void {
    return localStorage.setItem(name, btoa(JSON.stringify(payload)));
  }
}
