export function getSandboxMenuItems() {
return [{"key":"./app/app/heroes/heroes.sandbox","searchKey":"HeroesComponent","name":"HeroesComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"}]}];
}
export function getSandbox(path: string) {
switch(path) {
case './app/app/heroes/heroes.sandbox':
return import('./app/app/heroes/heroes.sandbox').then(sandbox => { return sandbox.default.serialize('./app/app/heroes/heroes.sandbox'); });
}}
