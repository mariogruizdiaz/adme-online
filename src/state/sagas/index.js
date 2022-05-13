// @flow
import { fork } from "redux-saga/effects";
import basics from "./basics";
import genericAdme from "./genericAdme";
import post from "./post";
import personCredential from "./personCredential";

// eslint-disable-next-line flowtype/require-return-type
export default function* admeSaga() {
    yield fork(basics);
    yield fork(genericAdme);
    yield fork(post);
    yield fork(personCredential);
}
