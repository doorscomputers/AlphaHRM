A5.themes.add('NDDIBlue',{
	editButtonGroup: {
		base: {
			container: {
				className: 'NDDIBlueEditBG',
				hoverClassName: 'NDDIBlueEditBGHover',
				focusClassName: 'NDDIBlueEditBGFocus',
				separatorClassName: 'NDDIBlueEditBGSeparator',
				editClassName: 'NDDIBlueEditBGEdit',
				button: {
					html: '<img src="CSS/NDDIBlue/EditDDArrow.PNG" />',
					className: 'NDDIBlueEditBGButton',
					hoverClassName: 'NDDIBlueEditBGButtonHover',
					pressedClassName: 'NDDIBlueEditBGButtonPressed'
				}
			}
		}
	},
	button: {
		base: {
			className: 'NDDIBlueButton',
			hoverClassName: 'NDDIBlueButtonHover',
			pressedClassName: 'NDDIBlueButtonPressed',
			disabledClassName: 'NDDIBlueButtonDisabled'
		},
		toolbar: {
			className: 'NDDIBlueButtonT',
			hoverClassName: 'NDDIBlueButtonTHover',
			pressedClassName: 'NDDIBlueButtonTPressed',
			disabledClassName: 'NDDIBlueButtonTDisabled'
		}
	},
	buttonDropdown: {
		base: {
			className: 'NDDIBlueButtonDD',
			hoverClassName: 'NDDIBlueButtonDDHover',
			pressedClassName: 'NDDIBlueButtonDDPressed',
			disabledClassName: 'NDDIBlueButtonDDDisabled',
			contentClassName: 'NDDIBlueButtonDDContent',
			dropdown: {
				className: 'NDDIBlueButtonDDDropdown',
				icon: 'CSS/NDDIBlue/ButtonDDArrow.PNG'
			}
		},
		toolbar: {
			className: 'NDDIBlueButtonTDD',
			hoverClassName: 'NDDIBlueButtonTDDHover',
			pressedClassName: 'NDDIBlueButtonTDDPressed',
			disabledClassName: 'NDDIBlueButtonTDDDisabled',
			contentClassName: 'NDDIBlueButtonTDDContent',
			dropdown: {
				className: 'NDDIBlueButtonTDDDropdown',
				icon: 'CSS/NDDIBlue/ButtonDDArrow.PNG'
			}
		}
	},
	buttonSplit: {
		base: {
			className: 'NDDIBlueButtonDD',
			hoverClassName: 'NDDIBlueButtonDDHover',
			pressedClassName: 'NDDIBlueButtonDDPressed',
			disabledClassName: 'NDDIBlueButtonDDDisabled',
			contentClassName: 'NDDIBlueButtonDDSplitContent',
			dropdown: {
				className: 'NDDIBlueButtonDDSplitDropdown',
				hoverClassName: 'NDDIBlueButtonDDSplitDropdownHover',
				icon: 'CSS/NDDIBlue/ButtonDDArrow.PNG'
			}
		},
		toolbar: {
			className: 'NDDIBlueButtonTDD',
			hoverClassName: 'NDDIBlueButtonTDDHover',
			pressedClassName: 'NDDIBlueButtonTDDPressed',
			disabledClassName: 'NDDIBlueButtonTDDDisabled',
			contentClassName: 'NDDIBlueButtonTDDSplitContent',
			dropdown: {
				className: 'NDDIBlueButtonTDDSplitDropdown',
				hoverClassName: 'NDDIBlueButtonTDDSplitDropdownHover',
				icon: 'CSS/NDDIBlue/ButtonDDArrow.PNG'
			}
		}
	},
	slider: {
		base: {
			className: 'NDDIBlueSliderH',
			innerClassName: 'NDDIBlueSliderHInner',
			handle: {
				className: 'NDDIBlueSliderHHandle',
				minClassName: 'NDDIBlueSliderHHandleMin',
				maxClassName: 'NDDIBlueSliderHHandleMax',
				selectedClassName: 'NDDIBlueSliderHHandleSelected',
				hoverClassName: 'NDDIBlueSliderHHandleHover'
			},
			range: {
				className: 'NDDIBlueSliderHRange',
				selectedClassName: 'NDDIBlueSliderHRangeSelected',
				hoverClassName: 'NDDIBlueSliderHRangeHover'
			}
		}
	},
	listbox: {
		base: {
			className: 'NDDIBlueList',
			focusClassName: 'NDDIBlueListFocus',
			item: {
				className: 'NDDIBlueListItem',
				hoverClassName: 'NDDIBlueListItemHover',
				selectedClassName: 'NDDIBlueListItemSelected',
				titleClassName: 'NDDIBlueListTitle',
				separatorClassName: 'NDDIBlueListSeparator'
			}
		}
	},
	tree: {
		base: {
			className: 'NDDIBlueTree',
			focusClassName: 'NDDIBlueTreeFocus',
			node: {
				className: 'NDDIBlueTreeNode',
				hoverClassName: 'NDDIBlueTreeNodeHover',
				selectedClassName: 'NDDIBlueTreeNodeSelected',
				labelClassName: 'NDDIBlueTreeNodeLabel',
				leaf: {
					firstImage: '',
					image: '',
					lastImage: ''
				},
				branch: {
					firstExpandedImage: '',
					firstCollapsedImage: '',
					firstExpandedHoverImage: '',
					firstCollapsedHoverImage: '',
					expandedImage: 'CSS/NDDIBlue/TreeBranchCollapse.PNG',
					collapsedImage: 'CSS/NDDIBlue/TreeBranchExpand.PNG',
					expandedHoverImage: 'CSS/NDDIBlue/TreeBranchCollapseHover.PNG',
					collapsedHoverImage: 'CSS/NDDIBlue/TreeBranchExpandHover.PNG',
					lastExpandedImage: '',
					lastCollapsedImage: '',
					lastExpandedHoverImage: '',
					lastCollapsedHoverImage: ''
				}
			},
			branch: {
				className: 'NDDIBlueTreeBranch',
				lineImage: '',
				nullImage: 'CSS/NDDIBlue/TreeNull.PNG'
			}
		}
	},
	datePicker: {
		base: {
			className: 'NDDIBlueDP',
			calendar: {
				daysOfWeek: {
					show: true,
					className: 'NDDIBlueDPDaysOfWeek'
				},
				weeksOfYear: {
					show: false,
					className: 'NDDIBlueDPWeeksOfYear',
					headerClassName: 'NDDIBlueDPWeeksOfYearHeader'
				},
				date: {
					className: 'NDDIBlueDPDate',
					weekendClassName: 'NDDIBlueDPDateWeekend',
					todayClassName: 'NDDIBlueDPDateToday',
					item: {
						className: 'NDDIBlueDPItem',
						hoverClassName: 'NDDIBlueDPItemHover',
						selectedClassName: 'NDDIBlueDPItemSelected',
						disabledClassName: 'NDDIBlueDPItemDisabled',
						outOfRangeClassName: 'NDDIBlueDPItemOutOfRange'
					}
				}
			},
			navigator: {
				header: {
					className: 'NDDIBlueDPHeader',
					prevIcon: 'CSS/NDDIBlue/DPPrev.PNG',
					nextIcon: 'CSS/NDDIBlue/DPNext.PNG',
					prevIconHover: '',
					nextIconHover: '',
					item: {
						className: 'NDDIBlueDPHeaderButton',
						hoverClassName: 'NDDIBlueDPHeaderButtonHover',
						selectedClassName: 'NDDIBlueDPHeaderButtonSelected'
					}
				},
				panel: {
					className: 'NDDIBlueDPPanel',
					edit: {
						className: 'NDDIBlueEdit'
					},
					item: {
						className: 'NDDIBlueDPItem',
						hoverClassName: 'NDDIBlueDPItemHover',
						selectedClassName: 'NDDIBlueDPItemSelected',
						disabledClassName: 'NDDIBlueDPItemDisabled'
					}
				}
			}
		}
	},
	timePicker: {
		base: {
			className: 'NDDIBlueTP',
			edit: {
				className: 'NDDIBlueEdit',
				buttonClassName: 'NDDIBlueTPEditButton',
				buttonImage: 'CSS/NDDIBlue/TPEditDDArrow.PNG'
			},
			meridianClassName: 'NDDIBlueTPMeridianButton'
		}
	},
	menu: {
		base: {
			className: 'NDDIBlueMenu',
			innerClassName: 'NDDIBlueMenuInner',
			closeOnLeave: true,
			closeWait: 500,
			cascadeOffsetX: 0,
			cascadeOffsetY: 0,
			iconColumn: {
				className: 'NDDIBlueMenuIconColumn',
				preventIndentClassName: 'NDDIBlueMenuNoIndent',
				width: '22px'
			},
			item: {
				className: 'NDDIBlueMenuItem',
				labelClassName: 'NDDIBlueMenuItemLabel',
				hoverClassName: 'NDDIBlueMenuItemHover',
				selectedClassName: 'NDDIBlueMenuItemSelected',
				disabledClassName: 'NDDIBlueMenuItemDisabled',
				disabledHoverClassName: 'NDDIBlueMenuItemDisabledHover',
				cascadeClassName: 'NDDIBlueMenuItemCascade',
				separatorClassName: 'NDDIBlueMenuSeparator',
				titleClassName: 'NDDIBlueMenuTitle',
				radioImage: 'CSS/NDDIBlue/MenuRadio.PNG',
				checkImage: 'CSS/NDDIBlue/MenuCheck.PNG'
			}
		}
	},
	menubar: {
		base: {
			item: {
				className: 'NDDIBlueMenubarHItem',
				hoverClassName: 'NDDIBlueMenubarHItemHover',
				pressedClassName: 'NDDIBlueMenubarHItemPressed',
				disabledClassName: 'NDDIBlueMenubarHItemDisabled',
				cascadeClassName: 'NDDIBlueMenubarHItemCascade',
				separatorClassName: 'NDDIBlueMenubarHSeparator'
			}
		},
		vertical: {
			item: {
				className: 'NDDIBlueMenubarVItem',
				hoverClassName: 'NDDIBlueMenubarVItemHover',
				pressedClassName: 'NDDIBlueMenubarVItemPressed',
				disabledClassName: 'NDDIBlueMenubarVItemDisabled',
				cascadeClassName: 'NDDIBlueMenubarVItemCascade',
				separatorClassName: 'NDDIBlueMenubarVSeparator'
			}
		}
	},
	window: {
		base: {
			className: 'NDDIBlueWin',
			outerWrapClassName: 'NDDIBlueWinInner',
			innerWrapClassName: 'NDDIBlueWinBodyContainer',
			adjustmentClassName: 'NDDIBlueWinAdjust',
			activeClassName: 'NDDIBlueWinActive',
			lockUIClassName: 'NDDIBlueUILock',
			title: {className: 'NDDIBlueWinTitle', tools: {inset: '4px'}},
			header: {className: 'NDDIBlueWinHeader'},
			tbar: {className: 'NDDIBlueWinTBAR'},
			body: {className: 'NDDIBlueWinBody'},
			bbar: {className: 'NDDIBlueWinBBAR'},
			buttons: {className: 'NDDIBlueWinButtons'},
			footer: {className: 'NDDIBlueWinFooter'},
			resizer: {
				className: 'NDDIBlueWinResizer',
				thumbImage: 'CSS/NDDIBlue/WinResizeThumb.PNG'
			},
			_buttonDefaults: {
				className: 'NDDIBlueButton',
				hoverClassName: 'NDDIBlueButtonHover',
				pressedClassName: 'NDDIBlueButtonPressed',
				disabledClassName: 'NDDIBlueButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'CSS/NDDIBlue/WinClose.PNG',
					imageHover: 'CSS/NDDIBlue/WinCloseHover.PNG',
					imagePressed: 'CSS/NDDIBlue/WinClosePressed.PNG',
					action: 'close'
				}
			}
		},
		dropdown: {
			className: 'NDDIBlueDDWin',
			outerWrapClassName: 'NDDIBlueDDWinInner',
			innerWrapClassName: 'NDDIBlueDDWinBodyContainer',
			adjustmentClassName: 'NDDIBlueDDWinAdjust',
			activeClassName: 'NDDIBlueDDWinActive',
			lockUIClassName: 'NDDIBlueUILock',
			title: {className: 'NDDIBlueDDWinTitle', tools: {inset: '4px'}},
			header: {className: 'NDDIBlueDDWinHeader'},
			tbar: {className: 'NDDIBlueDDWinTBAR'},
			body: {className: 'NDDIBlueDDWinBody'},
			bbar: {className: 'NDDIBlueDDWinBBAR'},
			buttons: {className: 'NDDIBlueDDWinButtons'},
			footer: {className: 'NDDIBlueDDWinFooter'},
			resizer: {
				className: 'NDDIBlueDDWinResizer',
				thumbImage: 'CSS/NDDIBlue/DDWinResizeThumb.PNG'
			},
			_buttonDefaults: {
				className: 'NDDIBlueButton',
				hoverClassName: 'NDDIBlueButtonHover',
				pressedClassName: 'NDDIBlueButtonPressed',
				disabledClassName: 'NDDIBlueButtonDisabled'
			},
			_defaultTools: {
				'close': {
					image: 'CSS/NDDIBlue/DDWinClose.PNG',
					imageHover: 'CSS/NDDIBlue/DDWinCloseHover.PNG',
					imagePressed: 'CSS/NDDIBlue/DDWinClosePressed.PNG',
					action: 'close'
				}
			}
		}
	},
	accordion: {
		base: {
			titleClassName: 'NDDIBlueAccordionButton',
			titleSelectedClassName: 'NDDIBlueAccordionButtonSelected',
			titleDisabledClassName: 'NDDIBlueAccordionButtonDisabled',
			paneClassName: 'NDDIBlueAccordionPane'
		}
	},
	tab: {
		base: {
			tabClassName: 'NDDIBlueTabTButton',
			tabSelectedClassName: 'NDDIBlueTabTButtonSelected',
			tabDisabledClassName: 'NDDIBlueTabTButtonDisabled',
			paneClassName: 'NDDIBlueTabTPane'
		},
		bottom: {
			tabClassName: 'NDDIBlueTabBButton',
			tabSelectedClassName: 'NDDIBlueTabBButtonSelected',
			tabDisabledClassName: 'NDDIBlueTabBButtonDisabled',
			paneClassName: 'NDDIBlueTabBPane'
		},
		left: {
			tabClassName: 'NDDIBlueTabLButton',
			tabSelectedClassName: 'NDDIBlueTabLButtonSelected',
			tabDisabledClassName: 'NDDIBlueTabLButtonDisabled',
			paneClassName: 'NDDIBlueTabLPane'
		},
		right: {
			tabClassName: 'NDDIBlueTabRButton',
			tabSelectedClassName: 'NDDIBlueTabRButtonSelected',
			tabDisabledClassName: 'NDDIBlueTabRButtonDisabled',
			paneClassName: 'NDDIBlueTabRPane'
		}
	},
	tabBand: {
		base: {
			location: 'top',
			className: 'NDDIBlueTabbandT',
			separator:{
				className: 'NDDIBlueTabbandTSeparator',
				show: true
			},
			tab: {
				className: 'NDDIBlueTabbandTButton',
				selectedClassName: 'NDDIBlueTabbandTButtonSelected',
				disabledClassName: 'NDDIBlueTabbandTButtonDisabled',
				closeIcon: 'CSS/NDDIBlue/TabbandClose.PNG',
				closeIconHover: 'CSS/NDDIBlue/TabbandCloseHover.PNG'
			},
			scrollButtons: {
				prevClassName: 'NDDIBlueTabbandTLScroll',
				prevDisabledClassName: 'NDDIBlueTabbandTLScrollDisabled',
				prevImage: 'CSS/NDDIBlue/TabbandPrev.PNG',
				prevDisabledImage: 'CSS/NDDIBlue/TabbandPrevDisabled.PNG',
				nextClassName: 'NDDIBlueTabbandTRScroll',
				nextDisabledClassName: 'NDDIBlueTabbandTRScrollDisabled',
				nextImage: 'CSS/NDDIBlue/TabbandNext.PNG',
				nextDisabledImage: 'CSS/NDDIBlue/TabbandNextDisabled.PNG'
			}
		},
		bottom: {
			location: 'bottom',
			className: 'NDDIBlueTabbandB',
			separator:{
				className: 'NDDIBlueTabbandBSeparator',
				show: true
			},
			tab: {
				className: 'NDDIBlueTabbandBButton',
				selectedClassName: 'NDDIBlueTabbandBButtonSelected',
				disabledClassName: 'NDDIBlueTabbandBButtonDisabled',
				closeIcon: 'CSS/NDDIBlue/TabbandClose.PNG',
				closeIconHover: 'CSS/NDDIBlue/TabbandCloseHover.PNG'
			},
			scrollButtons: {
				prevClassName: 'NDDIBlueTabbandBLScroll',
				prevDisabledClassName: 'NDDIBlueTabbandBLScrollDisabled',
				prevImage: 'CSS/NDDIBlue/TabbandPrev.PNG',
				prevDisabledImage: 'CSS/NDDIBlue/TabbandPrevDisabled.PNG',
				nextClassName: 'NDDIBlueTabbandBRScroll',
				nextDisabledClassName: 'NDDIBlueTabbandBRScrollDisabled',
				nextImage: 'CSS/NDDIBlue/TabbandNext.PNG',
				nextDisabledImage: 'CSS/NDDIBlue/TabbandNextDisabled.PNG'
			}
		}
	}
});