import {EnumValue} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";

export interface Pet {
  id: number;
  name: string;
  kind: EnumValue;
  image: string;
  profileText: string;
  popularity: number;
}
