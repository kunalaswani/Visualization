﻿"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.test_graphFactory = factory();
    }
}(this, function () {
    return {
        WUResult: {
            Nested: function (callback) {
                legacyRequire(["test/DataFactory", "src/eclwatch/WUResult"], function (DataFactory, WUResult) {
                    callback(new WUResult()
                        .wsWorkunitsUrl("http://192.168.3.22:8010")
                        .wuid("W20170627-102820")
                        .resultName("NestedChildDataset")
                    );
                });
            },
            Nested2: function (callback) {
                legacyRequire(["test/DataFactory", "src/eclwatch/WUResult"], function (DataFactory, WUResult) {
                    callback(new WUResult()
                        .wsWorkunitsUrl("http://192.168.3.22:8010")
                        .wuid("W20170630-090707")
                        .resultName("All")
                    );
                });
            },
            LargeBySeq: function (callback) {
                legacyRequire(["test/DataFactory", "src/eclwatch/WUResult"], function (DataFactory, WUResult) {
                    callback(new WUResult()
                        .wsWorkunitsUrl("http://192.168.3.22:8010")
                        .wuid("W20170424-070701")
                        .sequence(1)
                    );
                });
            },
            LargeByName: function (callback) {
                legacyRequire(["test/DataFactory", "src/eclwatch/WUResult"], function (DataFactory, WUResult) {
                    callback(new WUResult()
                        .wsWorkunitsUrl("http://192.168.3.22:8010")
                        .wuid("W20170424-070701")
                        .resultName("Result 1")
                    );
                });
            }
        }
    };
}));