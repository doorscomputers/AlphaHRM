A5.themes.add('HRC',{
	"editButtonGroup": {
		"base": {
			"container": {
				"className": "HRCEditBG",
				"hoverClassName": "HRCEditBGHover",
				"focusClassName": "HRCEditBGFocus",
				"separatorClassName": "HRCEditBGSeparator",
				"editClassName": "HRCEditBGEdit",
				"button": {
					"html": "<img src=\"CSS/HRC/EditDDArrow.PNG\" />",
					"className": "HRCEditBGButton",
					"hoverClassName": "HRCEditBGButtonHover",
					"pressedClassName": "HRCEditBGButtonPressed"
				}
			}
		}
	},
	"button": {
		"base": {
			"className": "HRCButton",
			"hoverClassName": "HRCButtonHover",
			"pressedClassName": "HRCButtonPressed",
			"disabledClassName": "HRCButtonDisabled"
		},
		"toolbar": {
			"className": "HRCButtonT",
			"hoverClassName": "HRCButtonTHover",
			"pressedClassName": "HRCButtonTPressed",
			"disabledClassName": "HRCButtonTDisabled"
		}
	},
	"buttonDropdown": {
		"base": {
			"className": "HRCButtonDD",
			"hoverClassName": "HRCButtonDDHover",
			"pressedClassName": "HRCButtonDDPressed",
			"disabledClassName": "HRCButtonDDDisabled",
			"contentClassName": "HRCButtonDDContent",
			"dropdown": {
				"className": "HRCButtonDDDropdown",
				"icon": "CSS/HRC/ButtonDDArrow.PNG"
			}
		},
		"toolbar": {
			"className": "HRCButtonTDD",
			"hoverClassName": "HRCButtonTDDHover",
			"pressedClassName": "HRCButtonTDDPressed",
			"disabledClassName": "HRCButtonTDDDisabled",
			"contentClassName": "HRCButtonTDDContent",
			"dropdown": {
				"className": "HRCButtonTDDDropdown",
				"icon": "CSS/HRC/ButtonDDArrow.PNG"
			}
		}
	},
	"buttonSplit": {
		"base": {
			"className": "HRCButtonDD",
			"hoverClassName": "HRCButtonDDHover",
			"pressedClassName": "HRCButtonDDPressed",
			"disabledClassName": "HRCButtonDDDisabled",
			"contentClassName": "HRCButtonDDSplitContent",
			"dropdown": {
				"className": "HRCButtonDDSplitDropdown",
				"hoverClassName": "HRCButtonDDSplitDropdownHover",
				"icon": "CSS/HRC/ButtonDDArrow.PNG"
			}
		},
		"toolbar": {
			"className": "HRCButtonTDD",
			"hoverClassName": "HRCButtonTDDHover",
			"pressedClassName": "HRCButtonTDDPressed",
			"disabledClassName": "HRCButtonTDDDisabled",
			"contentClassName": "HRCButtonTDDSplitContent",
			"dropdown": {
				"className": "HRCButtonTDDSplitDropdown",
				"hoverClassName": "HRCButtonTDDSplitDropdownHover",
				"icon": "CSS/HRC/ButtonDDArrow.PNG"
			}
		}
	},
	"slider": {
		"base": {
			"className": "HRCSliderH",
			"innerClassName": "HRCSliderHInner",
			"handle": {
				"className": "HRCSliderHHandle",
				"minClassName": "HRCSliderHHandleMin",
				"maxClassName": "HRCSliderHHandleMax",
				"selectedClassName": "HRCSliderHHandleSelected",
				"hoverClassName": "HRCSliderHHandleHover"
			},
			"range": {
				"className": "HRCSliderHRange",
				"selectedClassName": "HRCSliderHRangeSelected",
				"hoverClassName": "HRCSliderHRangeHover"
			}
		}
	},
	"listbox": {
		"base": {
			"className": "HRCList",
			"focusClassName": "HRCListFocus",
			"item": {
				"className": "HRCListItem",
				"hoverClassName": "HRCListItemHover",
				"selectedClassName": "HRCListItemSelected",
				"titleClassName": "HRCListTitle",
				"separatorClassName": "HRCListSeparator"
			}
		}
	},
	"tree": {
		"base": {
			"className": "HRCTree",
			"focusClassName": "HRCTreeFocus",
			"node": {
				"className": "HRCTreeNode",
				"hoverClassName": "HRCTreeNodeHover",
				"selectedClassName": "HRCTreeNodeSelected",
				"labelClassName": "HRCTreeNodeLabel",
				"leaf": {
					"firstImage": "",
					"image": "",
					"lastImage": ""
				},
				"branch": {
					"firstExpandedImage": "",
					"firstCollapsedImage": "",
					"firstExpandedHoverImage": "",
					"firstCollapsedHoverImage": "",
					"expandedImage": "CSS/HRC/TreeBranchCollapse.PNG",
					"collapsedImage": "CSS/HRC/TreeBranchExpand.PNG",
					"expandedHoverImage": "CSS/HRC/TreeBranchCollapseHover.PNG",
					"collapsedHoverImage": "CSS/HRC/TreeBranchExpandHover.PNG",
					"lastExpandedImage": "",
					"lastCollapsedImage": "",
					"lastExpandedHoverImage": "",
					"lastCollapsedHoverImage": ""
				}
			},
			"branch": {
				"className": "HRCTreeBranch",
				"lineImage": "",
				"nullImage": "CSS/HRC/TreeNull.PNG"
			}
		}
	},
	"datePicker": {
		"base": {
			"className": "HRCDP",
			"calendar": {
				"daysOfWeek": {
					"show": true,
					"className": "HRCDPDaysOfWeek"
				},
				"weeksOfYear": {
					"show": false,
					"className": "HRCDPWeeksOfYear",
					"headerClassName": "HRCDPWeeksOfYearHeader"
				},
				"date": {
					"className": "HRCDPDate",
					"weekendClassName": "HRCDPDateWeekend",
					"todayClassName": "HRCDPDateToday",
					"item": {
						"className": "HRCDPItem",
						"hoverClassName": "HRCDPItemHover",
						"selectedClassName": "HRCDPItemSelected",
						"disabledClassName": "HRCDPItemDisabled",
						"outOfRangeClassName": "HRCDPItemOutOfRange"
					}
				}
			},
			"navigator": {
				"header": {
					"className": "HRCDPHeader",
					"prevIcon": "CSS/HRC/DPPrev.PNG",
					"nextIcon": "CSS/HRC/DPNext.PNG",
					"prevIconHover": "",
					"nextIconHover": "",
					"item": {
						"className": "HRCDPHeaderButton",
						"hoverClassName": "HRCDPHeaderButtonHover",
						"selectedClassName": "HRCDPHeaderButtonSelected"
					}
				},
				"panel": {
					"className": "HRCDPPanel",
					"edit": {
						"className": "HRCEdit"
					},
					"item": {
						"className": "HRCDPItem",
						"hoverClassName": "HRCDPItemHover",
						"selectedClassName": "HRCDPItemSelected",
						"disabledClassName": "HRCDPItemDisabled"
					}
				}
			}
		}
	},
	"timePicker": {
		"base": {
			"className": "HRCTP",
			"edit": {
				"className": "HRCEdit",
				"buttonClassName": "HRCTPEditButton",
				"buttonImage": "CSS/HRC/TPEditDDArrow.PNG"
			},
			"meridianClassName": "HRCTPMeridianButton"
		}
	},
	"menu": {
		"base": {
			"className": "HRCMenu",
			"innerClassName": "HRCMenuInner",
			"closeOnLeave": true,
			"closeWait": 500,
			"cascadeOffsetX": 0,
			"cascadeOffsetY": 0,
			"iconColumn": {
				"className": "HRCMenuIconColumn",
				"preventIndentClassName": "HRCMenuNoIndent",
				"width": "22px"
			},
			"item": {
				"className": "HRCMenuItem",
				"labelClassName": "HRCMenuItemLabel",
				"hoverClassName": "HRCMenuItemHover",
				"selectedClassName": "HRCMenuItemSelected",
				"disabledClassName": "HRCMenuItemDisabled",
				"disabledHoverClassName": "HRCMenuItemDisabledHover",
				"cascadeClassName": "HRCMenuItemCascade",
				"separatorClassName": "HRCMenuSeparator",
				"titleClassName": "HRCMenuTitle",
				"radioImage": "CSS/HRC/MenuRadio.PNG",
				"checkImage": "CSS/HRC/MenuCheck.PNG"
			}
		}
	},
	"menubar": {
		"base": {
			"item": {
				"className": "HRCMenubarHItem",
				"hoverClassName": "HRCMenubarHItemHover",
				"pressedClassName": "HRCMenubarHItemPressed",
				"disabledClassName": "HRCMenubarHItemDisabled",
				"cascadeClassName": "HRCMenubarHItemCascade",
				"separatorClassName": "HRCMenubarHSeparator"
			}
		},
		"vertical": {
			"item": {
				"className": "HRCMenubarVItem",
				"hoverClassName": "HRCMenubarVItemHover",
				"pressedClassName": "HRCMenubarVItemPressed",
				"disabledClassName": "HRCMenubarVItemDisabled",
				"cascadeClassName": "HRCMenubarVItemCascade",
				"separatorClassName": "HRCMenubarVSeparator"
			}
		}
	},
	"window": {
		"base": {
			"className": "HRCWin",
			"outerWrapClassName": "HRCWinInner",
			"innerWrapClassName": "HRCWinBodyContainer",
			"adjustmentClassName": "HRCWinAdjust",
			"activeClassName": "HRCWinActive",
			"lockUIClassName": "HRCUILock",
			"title": {
				"className": "HRCWinTitle",
				"tools": {
					"inset": "4px"
				}
			},
			"header": {
				"className": "HRCWinHeader"
			},
			"tbar": {
				"className": "HRCWinTBAR"
			},
			"body": {
				"className": "HRCWinBody"
			},
			"bbar": {
				"className": "HRCWinBBAR"
			},
			"buttons": {
				"className": "HRCWinButtons"
			},
			"footer": {
				"className": "HRCWinFooter"
			},
			"resizer": {
				"className": "HRCWinResizer",
				"thumbImage": "CSS/HRC/WinResizeThumb.PNG"
			},
			"_buttonDefaults": {
				"className": "HRCButton",
				"hoverClassName": "HRCButtonHover",
				"pressedClassName": "HRCButtonPressed",
				"disabledClassName": "HRCButtonDisabled"
			},
			"_defaultTools": {
				"close": {
					"image": "CSS/HRC/WinClose.PNG",
					"imageHover": "CSS/HRC/WinCloseHover.PNG",
					"imagePressed": "CSS/HRC/WinClosePressed.PNG",
					"action": "close"
				}
			}
		},
		"dropdown": {
			"className": "HRCDDWin",
			"outerWrapClassName": "HRCDDWinInner",
			"innerWrapClassName": "HRCDDWinBodyContainer",
			"adjustmentClassName": "HRCDDWinAdjust",
			"activeClassName": "HRCDDWinActive",
			"lockUIClassName": "HRCUILock",
			"title": {
				"className": "HRCDDWinTitle",
				"tools": {
					"inset": "4px"
				}
			},
			"header": {
				"className": "HRCDDWinHeader"
			},
			"tbar": {
				"className": "HRCDDWinTBAR"
			},
			"body": {
				"className": "HRCDDWinBody"
			},
			"bbar": {
				"className": "HRCDDWinBBAR"
			},
			"buttons": {
				"className": "HRCDDWinButtons"
			},
			"footer": {
				"className": "HRCDDWinFooter"
			},
			"resizer": {
				"className": "HRCDDWinResizer",
				"thumbImage": "CSS/HRC/DDWinResizeThumb.PNG"
			},
			"_buttonDefaults": {
				"className": "HRCButton",
				"hoverClassName": "HRCButtonHover",
				"pressedClassName": "HRCButtonPressed",
				"disabledClassName": "HRCButtonDisabled"
			},
			"_defaultTools": {
				"close": {
					"image": "CSS/HRC/DDWinClose.PNG",
					"imageHover": "CSS/HRC/DDWinCloseHover.PNG",
					"imagePressed": "CSS/HRC/DDWinClosePressed.PNG",
					"action": "close"
				}
			}
		}
	},
	"accordion": {
		"base": {
			"titleClassName": "HRCAccordionButton",
			"titleSelectedClassName": "HRCAccordionButtonSelected",
			"titleDisabledClassName": "HRCAccordionButtonDisabled",
			"paneClassName": "HRCAccordionPane"
		}
	},
	"tab": {
		"base": {
			"tabClassName": "HRCTabTButton",
			"tabSelectedClassName": "HRCTabTButtonSelected",
			"tabDisabledClassName": "HRCTabTButtonDisabled",
			"paneClassName": "HRCTabTPane"
		},
		"bottom": {
			"tabClassName": "HRCTabBButton",
			"tabSelectedClassName": "HRCTabBButtonSelected",
			"tabDisabledClassName": "HRCTabBButtonDisabled",
			"paneClassName": "HRCTabBPane"
		},
		"left": {
			"tabClassName": "HRCTabLButton",
			"tabSelectedClassName": "HRCTabLButtonSelected",
			"tabDisabledClassName": "HRCTabLButtonDisabled",
			"paneClassName": "HRCTabLPane"
		},
		"right": {
			"tabClassName": "HRCTabRButton",
			"tabSelectedClassName": "HRCTabRButtonSelected",
			"tabDisabledClassName": "HRCTabRButtonDisabled",
			"paneClassName": "HRCTabRPane"
		}
	},
	"tabBand": {
		"base": {
			"location": "top",
			"className": "HRCTabbandT",
			"separator": {
				"className": "HRCTabbandTSeparator",
				"show": true
			},
			"tab": {
				"className": "HRCTabbandTButton",
				"selectedClassName": "HRCTabbandTButtonSelected",
				"disabledClassName": "HRCTabbandTButtonDisabled",
				"closeIcon": "CSS/HRC/TabbandClose.PNG",
				"closeIconHover": "CSS/HRC/TabbandCloseHover.PNG"
			},
			"scrollButtons": {
				"prevClassName": "HRCTabbandTLScroll",
				"prevDisabledClassName": "HRCTabbandTLScrollDisabled",
				"prevImage": "CSS/HRC/TabbandPrev.PNG",
				"prevDisabledImage": "CSS/HRC/TabbandPrevDisabled.PNG",
				"nextClassName": "HRCTabbandTRScroll",
				"nextDisabledClassName": "HRCTabbandTRScrollDisabled",
				"nextImage": "CSS/HRC/TabbandNext.PNG",
				"nextDisabledImage": "CSS/HRC/TabbandNextDisabled.PNG"
			}
		},
		"bottom": {
			"location": "bottom",
			"className": "HRCTabbandB",
			"separator": {
				"className": "HRCTabbandBSeparator",
				"show": true
			},
			"tab": {
				"className": "HRCTabbandBButton",
				"selectedClassName": "HRCTabbandBButtonSelected",
				"disabledClassName": "HRCTabbandBButtonDisabled",
				"closeIcon": "CSS/HRC/TabbandClose.PNG",
				"closeIconHover": "CSS/HRC/TabbandCloseHover.PNG"
			},
			"scrollButtons": {
				"prevClassName": "HRCTabbandBLScroll",
				"prevDisabledClassName": "HRCTabbandBLScrollDisabled",
				"prevImage": "CSS/HRC/TabbandPrev.PNG",
				"prevDisabledImage": "CSS/HRC/TabbandPrevDisabled.PNG",
				"nextClassName": "HRCTabbandBRScroll",
				"nextDisabledClassName": "HRCTabbandBRScrollDisabled",
				"nextImage": "CSS/HRC/TabbandNext.PNG",
				"nextDisabledImage": "CSS/HRC/TabbandNextDisabled.PNG"
			}
		}
	}
});